"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Live studio clock in the studio's timezone. */
export default function Clock({ withZone = true }: { withZone?: boolean }) {
  const [now, setNow] = useState<string>("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: site.timezone,
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time suppressHydrationWarning>
      {now}
      {withZone ? ` ${site.tzLabel}` : null}
    </time>
  );
}
