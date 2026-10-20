import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";
import { SITE_CONFIG } from "@/lib/constants";
import { isRateLimited } from "@/lib/leads";
import {
  CITY_NAMES,
  PEST_NAMES,
  TIME_SLOTS,
  submitInspectionRequest,
  todayPacific,
} from "@/lib/inspection-request";
import { getBusinessInfo } from "./business-info";

/**
 * Stateless Streamable HTTP MCP server for the "Yogi's Pest Control" ChatGPT app /
 * connector. Every POST builds a fresh server + transport (no sessions), which suits
 * serverless. GET (standalone SSE) and DELETE (session end) aren't used in stateless mode.
 */

const RATE_LIMIT = { bucket: "chatgpt-app", max: 20, windowMs: 10 * 60 * 1000 };

const REQUEST_INSPECTION_DESCRIPTION = `Send a free pest inspection request to Yogi's Pest Control (licensed, owner-operated, serving all of Orange County, CA). The owner, Yobani, receives it by email and calls the customer to confirm the time.

Before calling this tool:
1. Collect from the user: full name, phone number, email, street address, city, 5-digit ZIP, the pest problem, a preferred date and a preferred 2-hour time window. Ask for anything missing; never invent or guess values.
2. Read all of the details back to the user in one short summary and ask whether to send the request.
3. Call this tool only after the user explicitly says yes, and set customerConfirmed to true. Never submit without the user's explicit consent, and never submit the same request twice.

If the user's city or pest isn't listed, use the closest match ("${PEST_NAMES[PEST_NAMES.length - 1]}" for pests) and put their own words in notes; if their location is outside Orange County, tell them to call ${SITE_CONFIG.phone}. Call get_business_info first if you need today's date, prices or the list of services.`;

const requestInspectionInput = {
  name: z.string().min(1).max(100).describe("Customer's full name."),
  phone: z.string().min(10).max(30).describe("Customer's 10-digit US phone number, e.g. 714-555-0123."),
  email: z.string().email().max(254).describe("Customer's email address; a confirmation is sent here."),
  address: z.string().min(5).max(200).describe("Street address including unit number, e.g. '123 Main St, Apt 4'. Do not include the city or ZIP here."),
  city: z.enum(CITY_NAMES as [string, ...string[]]).describe("Orange County city where the property is."),
  zip: z.string().regex(/^\d{5}$/).describe("5-digit ZIP code of the property."),
  pestType: z.enum(PEST_NAMES as [string, ...string[]]).describe("Service that best matches the problem."),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe("Preferred inspection date as YYYY-MM-DD (today or later, Orange County time)."),
  time: z.enum(TIME_SLOTS).describe("Preferred 2-hour arrival window."),
  notes: z
    .string()
    .max(2000)
    .optional()
    .describe("Optional: what the customer is seeing, in their words (where, how long, pets, gate codes)."),
  customerConfirmed: z
    .boolean()
    .describe("Must be true: the user reviewed the summary of these details and explicitly asked you to send it."),
};

function buildServer(request: Request) {
  const server = new McpServer({ name: "yogis-pest-control", version: "1.0.0" });

  server.registerTool(
    "request_inspection",
    {
      title: "Request a free pest inspection",
      description: REQUEST_INSPECTION_DESCRIPTION,
      inputSchema: requestInspectionInput,
      annotations: {
        title: "Request a free pest inspection",
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
    },
    async (args) => {
      try {
        const result = await submitInspectionRequest(args, {
          source: "chatgpt-app",
          rateLimit: () => isRateLimited(request, RATE_LIMIT),
        });
        const text = result.ok ? result.message ?? "Request sent." : `Not sent: ${result.error}`;
        return { content: [{ type: "text" as const, text }], isError: !result.ok };
      } catch (error) {
        console.error("MCP request_inspection error:", error);
        return {
          content: [
            {
              type: "text" as const,
              text: `Not sent: the request could not be delivered right now. Ask the customer to call ${SITE_CONFIG.phone} or book at ${SITE_CONFIG.url}/book.`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  server.registerTool(
    "get_business_info",
    {
      title: "Yogi's Pest Control business info",
      description:
        "Read-only facts about Yogi's Pest Control: hours, phone, CA license OPR 14866, services, Orange County cities served, typical price ranges, inspection time windows, Google Business Profile link and today's date in Orange County. Use it to answer questions; quote prices as ranges and say the exact price comes after the free inspection.",
      inputSchema: {},
      annotations: {
        title: "Yogi's Pest Control business info",
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async () => {
      const info = { ...getBusinessInfo(), todayInOrangeCounty: todayPacific() };
      return {
        content: [{ type: "text" as const, text: JSON.stringify(info, null, 2) }],
      };
    }
  );

  return server;
}

export async function POST(request: Request) {
  const server = buildServer(request);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
    maxRequestBodySize: 64 * 1024,
  });
  try {
    await server.connect(transport);
    return await transport.handleRequest(request);
  } catch (error) {
    console.error("MCP error:", error);
    return Response.json(
      { jsonrpc: "2.0", error: { code: -32603, message: "Internal server error" }, id: null },
      { status: 500 }
    );
  } finally {
    // With JSON responses the body is fully built before handleRequest resolves.
    void server.close().catch(() => {});
  }
}

function methodNotAllowed() {
  return Response.json(
    { jsonrpc: "2.0", error: { code: -32000, message: "Method not allowed. This MCP server is stateless; use POST." }, id: null },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export const GET = methodNotAllowed;
export const DELETE = methodNotAllowed;
