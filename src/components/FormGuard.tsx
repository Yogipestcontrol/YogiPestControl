"use client";

import { useState } from "react";

/**
 * Spam guard for lead forms: a hidden honeypot field bots tend to fill, plus the
 * time the form was first shown. Spread `guard` into the JSON body and render
 * `honeypot` anywhere inside the <form>.
 */
export function useFormGuard() {
  const [startedAt] = useState(() => Date.now());
  const [hp, setHp] = useState("");

  const honeypot = (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor="company_website">Leave this field empty</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
      />
    </div>
  );

  return { guard: { _hp: hp, _t: startedAt }, honeypot };
}
