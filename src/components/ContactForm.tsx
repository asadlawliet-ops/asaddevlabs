"use client";

import { useState, type FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { site } from "@/lib/site";

const types = ["Landing page", "Multi-page site", "E-commerce", "Technical SEO", "App / Extension", "Automation"];
const budgets = ["< $1k", "$1k – $3k", "$3k – $7k", "$7k – $15k", "$15k +", "Not sure yet"];

/**
 * Enquiry form. Composes a structured email in the visitor's mail client
 * (no backend required) and fires a GA4 `generate_lead` event when GA is on.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const budget = String(fd.get("budget") || "");
    const message = String(fd.get("message") || "").trim();
    const selected = fd.getAll("type").map(String);

    const subject = `New project enquiry — ${name || "Website"}${selected.length ? ` (${selected.join(", ")})` : ""}`;
    const lines = [`Name: ${name}`, `Email: ${email}`];
    if (company) lines.push(`Company / site: ${company}`);
    if (selected.length) lines.push(`Project: ${selected.join(", ")}`);
    if (budget) lines.push(`Budget: ${budget}`);
    const body = `${lines.join("\n")}\n\n${message}`;

    try {
      if (process.env.NEXT_PUBLIC_GA_ID) sendGAEvent("event", "generate_lead", { form: "contact", project: selected.join("|") });
    } catch {}

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} data-reveal>
      <div className="field">
        <label className="eyebrow muted" htmlFor="f-name">
          Your name *
        </label>
        <input id="f-name" name="name" required autoComplete="name" placeholder="Jane Founder" />
      </div>
      <div className="field">
        <label className="eyebrow muted" htmlFor="f-email">
          Email *
        </label>
        <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="jane@brand.com" />
      </div>
      <div className="field">
        <label className="eyebrow muted" htmlFor="f-company">
          Company / current site
        </label>
        <input id="f-company" name="company" autoComplete="organization" placeholder="brand.com" />
      </div>
      <div className="field">
        <label className="eyebrow muted" htmlFor="f-budget">
          Budget
        </label>
        <select id="f-budget" name="budget" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <fieldset className="field field--full" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="eyebrow muted" style={{ marginBottom: "0.8rem" }}>
          What do you need?
        </legend>
        <div className="chips">
          {types.map((t) => (
            <label key={t}>
              <input type="checkbox" name="type" value={t} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field field--full">
        <label className="eyebrow muted" htmlFor="f-msg">
          Tell me about the project *
        </label>
        <textarea id="f-msg" name="message" required rows={4} placeholder="Goals, timeline, references you love…" />
      </div>
      <div className="form__foot">
        <p className="eyebrow muted" aria-live="polite">
          {sent ? "Opening your mail app — talk soon." : "Reply within 24 hours · NDA on request"}
        </p>
        <button type="submit" className="btn btn--signal" data-magnetic="0.3">
          Send enquiry
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
