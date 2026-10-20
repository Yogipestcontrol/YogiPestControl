import Link from "next/link";
import type { ReactNode } from "react";

// Matches markdown-style links: [anchor text](href). Anchor may not contain "]"; href may not contain ")" or whitespace.
const LINK_RE = /\[([^\]\n]+)\]\(([^)\s]+)\)/g;

export const INLINE_LINK_CLASS = "text-primary hover:underline";

/**
 * Turns `[anchor](href)` inside a plain-text string into React nodes.
 * - href starting with "/" (but not "//") -> next/link <Link>
 * - href starting with http:// or https:// -> <a target="_blank" rel="noopener noreferrer">
 * - anything else is left as the original plain text
 * No HTML is ever injected; everything else stays a text node.
 */
export function renderInlineLinks(text: string, keyPrefix = "l"): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(LINK_RE)) {
    const [whole, anchor, href] = match;
    const start = match.index ?? 0;
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    const isExternal = /^https?:\/\//i.test(href);
    if (!isInternal && !isExternal) continue; // leave as plain text
    if (start > last) nodes.push(text.slice(last, start));
    const key = `${keyPrefix}-${i++}`;
    nodes.push(
      isInternal ? (
        <Link key={key} href={href} className={INLINE_LINK_CLASS}>
          {anchor}
        </Link>
      ) : (
        <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={INLINE_LINK_CLASS}>
          {anchor}
        </a>
      ),
    );
    last = start + whole.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Strips link syntax, keeping only the anchor text (for headings/metadata where links aren't wanted). */
export function stripInlineLinks(text: string): string {
  return text.replace(LINK_RE, "$1");
}

/** All [..](href) targets in a string. */
export function extractInlineLinkHrefs(text: string): string[] {
  return Array.from(text.matchAll(LINK_RE), (m) => m[2]);
}
