"use client";

import { useId, useState } from "react";
import { services } from "@/lib/site";

/** Indexed capability list — ink sweep on hover, accessible accordion on click/tap. */
export default function ServicesList() {
  const [open, setOpen] = useState<string | null>(services[0].id);
  const uid = useId();

  return (
    <ul className="svc-list">
      {services.map((s, i) => {
        const isOpen = open === s.id;
        const panelId = `${uid}-${s.id}`;
        return (
          <li key={s.id} className={`svc${isOpen ? " is-open" : ""}`} data-reveal>
            <h3>
              <button
                type="button"
                className="svc__row"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : s.id)}
                data-cursor={isOpen ? "Close" : "Open"}
              >
                <span className="svc__idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="svc__title">
                  {s.title} <em>{s.italic}</em>
                </span>
                <span className="svc__tags" aria-hidden="true">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
                <span className="svc__plus" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="svc__panel" role="region" aria-label={`${s.title} ${s.italic}`}>
              <div>
                <div className="svc__inner">
                  <p className="svc__summary">{s.summary}</p>
                  <ul className="svc__items">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
