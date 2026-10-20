# Getting Yogi's leads from ChatGPT (and Microsoft Copilot / Bing)

Three ways an AI assistant can turn a conversation into a booked free inspection. All three end in the same place: the same lead email Yobani already gets from `/book`, tagged with its source in the subject line.

| Path | What it is | Endpoint | Subject tag |
|---|---|---|---|
| A. Agent-friendly `/book` | ChatGPT agent mode (or any browser agent) fills in the normal booking form | `https://yogispestcontrol.com/book` | none (same as a website booking) |
| B. Custom GPT | A "Yogi's Pest Control" GPT whose Action calls the JSON API | `POST https://yogispestcontrol.com/api/inspection` | `[via ChatGPT]` |
| C. ChatGPT app / connector | An MCP server ChatGPT connects to | `https://yogispestcontrol.com/api/mcp` | `[via ChatGPT app]` |

Deploy the site first. None of this works until `/openapi.json`, `/api/inspection` and `/api/mcp` are live on yogispestcontrol.com.

---

## A. `/book` for browser agents (nothing to set up)

The booking form now has real labels and `name`/`autocomplete` attributes on every field, and its buttons say what they do ("Next: Date & Time", "Next: Contact Info", "Book My Free Inspection"). Time windows are real radio buttons, and answers carry over between steps and through a reload. Links can also prefill step 1:

```
https://yogispestcontrol.com/book?pest=rodent-control&city=Irvine&zip=92618
```

`pest` and `city` take either the slug or the display name.

---

## B. Custom GPT "Yogi's Pest Control"

You need a ChatGPT Plus, Pro, Business or Enterprise account to create a GPT.

1. Go to https://chatgpt.com/gpts/editor (or **Explore GPTs → Create**) and open the **Configure** tab.
2. **Name:** `Yogi's Pest Control`
3. **Description:** `Free pest inspections across Orange County, CA. Ask about rats, ants, roaches, bees, fleas and more, or book a free inspection with owner-operator Yobani Arreola (CA license OPR 14866).`
4. **Instructions:** paste the block below.
5. **Conversation starters:**
   - `I think I have rats in my attic. Can someone come look?`
   - `Book a free pest inspection at my house`
   - `How much does ant or roach treatment cost in Orange County?`
   - `Do you handle bees and wasps near my front door?`
6. **Capabilities:** turn off Image generation and Code interpreter. Web search is optional.
7. **Actions → Create new action:**
   - **Authentication:** None
   - **Schema → Import from URL:** `https://yogispestcontrol.com/openapi.json`
   - Confirm that ChatGPT shows one action, `requestInspection`.
   - **Privacy policy:** `https://yogispestcontrol.com/privacy`
8. Use **Preview** to run one booking end to end. Use your own name and email, and put "TEST, please ignore" in the notes. Check that the lead email arrives with `[via ChatGPT]` in the subject. ChatGPT should ask for your permission before it sends, because the operation is marked consequential.
9. **Create → Share:** choose "Anyone with the link" or "GPT Store". To list it in the GPT Store, the builder profile needs a verified name or domain (Settings → Builder profile). Verifying `yogispestcontrol.com` there adds a DNS TXT record.

### Instructions to paste

```
You are the booking assistant for Yogi's Pest Control, a licensed, owner-operated pest control company based in Tustin, California, serving all of Orange County. The owner is Yobani Arreola, CA Structural Pest Control Board operator license OPR 14866. Open 7 days a week, 8 AM to 8 PM. Phone: 714-323-8262. Website: https://yogispestcontrol.com. Inspections are free, with a detailed quote. Commercial service is available (restaurants, HOAs, offices, warehouses).

Services: rodent control (rats, mice, roof rats), rodent exclusion (sealing entry points), attic cleanouts, cockroaches, ants, spiders, fleas and ticks, bed bugs, mosquitoes, flies, wasps, bee removal, gophers, wildlife trapping and removal, dead animal removal, and recurring perimeter service.

Typical price ranges (the exact price comes after the free inspection): General pest control $150–$250 one-time or $80–$150/mo; rodent control $200–$500 or $100–$200/mo; cockroaches $150–$300 or $80–$150/mo; ants $150–$250 or $75–$125/mo; spiders $150–$250 or $75–$125/mo; mosquitoes $150–$300 or $100–$175/mo; ticks and fleas $200–$400 or $100–$150/mo; bed bugs $500–$1,500; wasp/bee removal $150–$500; bee hive removal from walls $500–$800+; wildlife trapping $250–$600; gophers $250–$600; dead animal removal $150–$400; exclusion repairs $300–$1,500+; attic cleanout $500–$3,000+. Source: https://yogispestcontrol.com/pest-control-cost

How to help:
- Answer pest questions briefly and practically. When someone has an active problem, offer to book a free inspection.
- To book: collect the customer's full name, phone number, email, street address, city, 5-digit ZIP, what pest they are seeing, a preferred date, and one of these windows: 8:00 AM - 10:00 AM, 10:00 AM - 12:00 PM, 12:00 PM - 2:00 PM, 2:00 PM - 4:00 PM, 4:00 PM - 6:00 PM, 6:00 PM - 8:00 PM. Ask only for what's missing. Never guess or make up any detail.
- Before sending, show a short summary of every detail and ask "Should I send this to Yogi's?" Call requestInspection only after the customer clearly says yes, with customerConfirmed set to true. Never send without explicit consent, and never send the same request twice.
- After it's sent, tell them Yobani will call to confirm the exact time. Do not promise a specific arrival time.
- If the action returns an error, explain it plainly, fix it with the customer, and ask before trying again. If it still fails, give them 714-323-8262 or https://yogispestcontrol.com/book.
- If they're outside Orange County, or need something not listed (for example termite work), suggest calling 714-323-8262 to ask. Don't say Yogi's offers it.

Rules: Don't claim to be the best, #1, top-rated or available 24/7. Don't call products "safe for kids, pets or the environment". Say Yogi's uses EPA-registered products applied according to the label, with re-entry guidance. Wildlife is trapped and removed, never "relocated". Don't invent reviews, customer counts, years in business or guarantees. Don't give medical advice about bites or stings beyond suggesting a doctor.
```

---

## C. ChatGPT app / connector (MCP)

`/api/mcp` is a stateless Streamable HTTP MCP server with no sign-in. It exposes two tools:

- **`get_business_info`** (read-only): hours, phone, license OPR 14866, services, cities, the price ranges from `/pest-control-cost`, time windows, the Google Business Profile link and today's date in Orange County.
- **`request_inspection`**: takes the same fields as the GPT Action, including `customerConfirmed: true`. It sends the lead through the same pipeline as `/book`.

### Test it yourself (developer mode)

1. In ChatGPT go to **Settings → Apps & Connectors → Advanced settings** and turn on **Developer mode**. Business and Enterprise workspaces need an admin to allow it. OpenAI moves this menu around, so see https://developers.openai.com/apps-sdk/deploy/connect-chatgpt if it isn't there.
2. **Settings → Apps & Connectors → Create:**
   - Name: `Yogi's Pest Control`
   - Description: `Book a free pest inspection with Yogi's Pest Control (Orange County, CA) and get hours, services and price ranges.`
   - MCP server URL: `https://yogispestcontrol.com/api/mcp`
   - Authentication: **No authentication**
3. In a new chat, open **+ → Developer mode / connectors** and enable the app. Ask "what are Yogi's hours?" to test `get_business_info`. Then do one TEST booking and check for `[via ChatGPT app]` in the lead email subject.
4. Optional local check: run `npx @modelcontextprotocol/inspector`, choose "Streamable HTTP", and enter the URL.

### Submit it for the ChatGPT app directory

1. Read OpenAI's app submission guidelines (linked from https://developers.openai.com/apps-sdk). You'll need a verified developer/organization profile on platform.openai.com, a privacy policy URL (`https://yogispestcontrol.com/privacy`), a support contact (`yobani.a@yogispestcontrol.com` / 714-323-8262), an app icon, a short and long description, and test prompts with their expected results.
2. Submit from the OpenAI Platform dashboard. OpenAI may ask you to prove you own the domain, for example by serving a token at `https://yogispestcontrol.com/.well-known/...`. If it does, add that file under `public/.well-known/` and deploy.
3. Suggested test prompts for reviewers: "What are Yogi's Pest Control's hours and license number?" and "I have rats in my garage in Irvine, can you set up an inspection?" The second one should collect details and ask for confirmation before calling `request_inspection`.

**OpenAI controls review and listing.** Approval isn't guaranteed and timing is up to them. Until it's approved, only people who add the URL in developer mode can use the app. The custom GPT (B) can be shared right away.

---

## Microsoft Copilot and Bing

Bing has no public equivalent of a custom GPT or the ChatGPT app directory. Copilot's answers about local businesses come from Bing's index and Bing Places, so that is where the work goes:

1. **Bing Places for Business** (https://www.bingplaces.com): claim or import the listing. "Import from Google Business Profile" copies the hours, phone and service area. Keep the name, phone (714-323-8262) and hours exactly as they are on Google.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): add the site (you can import from Google Search Console) and submit `https://yogispestcontrol.com/sitemap.xml`. Optionally turn on IndexNow so new pages get crawled quickly.
3. **Copilot Studio (optional, for a Microsoft 365 org):** add a tool → **Model Context Protocol** with the URL `https://yogispestcontrol.com/api/mcp` and authentication **None**. It uses the same Streamable HTTP server as ChatGPT. This only gives an agent inside your own Microsoft tenant access; it doesn't list Yogi's in consumer Copilot.

---

## Protections on the API and MCP endpoints

- Every field is validated with a maximum length. The API requires a valid email, a 10-digit US phone, a street address, a 5-digit ZIP, an Orange County city from the list, a date from today (Pacific time) up to 12 months out, and one of the six time windows.
- `customerConfirmed` must be `true`, or the request is rejected.
- A per-IP rate limit allows 20 requests per 10 minutes. It's looser than the website's 5 because ChatGPT's traffic comes from shared OpenAI IPs. On top of that, each email and each phone number is capped at 3 requests per day.
- The same sales-pitch filter as the website runs on every request. When it trips, the agent gets an error telling it to have the customer call, rather than a fake "success".
- Rate limits are kept in memory on each server instance, so they slow down bursts but aren't a hard guarantee. If abuse shows up, add a Vercel Firewall rate-limit rule on `/api/inspection` and `/api/mcp`.
