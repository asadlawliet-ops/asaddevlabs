import type { BuildType } from "@/lib/site";

/** Hand-drawn CSS wireframes — one abstract "blueprint" per website type. */
export default function BuildArt({ art }: { art: BuildType["art"] }) {
  switch (art) {
    case "landing":
      return (
        <div className="wf">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <b style={{ width: "22%", height: 6 }} />
            <b className="a pill" style={{ width: "18%", height: 10 }} />
          </div>
          <b style={{ width: "86%", height: "13%" }} />
          <b style={{ width: "62%", height: "13%" }} />
          <b className="s" style={{ width: "48%", height: 6 }} />
          <b className="a pill" style={{ width: "30%", height: "9%" }} />
          <b className="s" style={{ flex: 1, borderRadius: 8 }} />
        </div>
      );
    case "multi":
      return (
        <div className="wf" style={{ inset: "14% 16%" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="frame col"
              style={{
                position: "absolute",
                inset: 0,
                transform: `translate(${(i - 1) * 14}%, ${(i - 1) * 10}%) rotate(${(i - 1) * 3}deg)`,
                gap: "10%",
              }}
            >
              <b style={{ width: "40%", height: 6 }} className={i === 2 ? "a" : ""} />
              <b style={{ width: "80%", height: "14%" }} />
              <b className="s" style={{ width: "100%", flex: 1, borderRadius: 6 }} />
            </div>
          ))}
        </div>
      );
    case "shop":
      return (
        <div className="wf">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <b style={{ width: "26%", height: 6 }} />
            <b className="a" style={{ width: 18, height: 18, borderRadius: 99 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8%", flex: 1 }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="col" style={{ gap: 6 }}>
                <b className="s" style={{ flex: 1, borderRadius: 6 }} />
                <b style={{ width: "70%", height: 5 }} />
                <b className={i === 1 ? "a" : "s"} style={{ width: "35%", height: 5 }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "app":
      return (
        <div className="wf" style={{ flexDirection: "row", gap: "6%" }}>
          <div className="col" style={{ width: "22%", gap: 8 }}>
            <b style={{ height: 8 }} />
            {[0, 1, 2, 3].map((i) => (
              <b key={i} className={i === 1 ? "a" : "s"} style={{ height: 6 }} />
            ))}
          </div>
          <div className="col" style={{ flex: 1, gap: "6%" }}>
            <div className="row">
              <b className="s" style={{ flex: 1, height: 36, borderRadius: 6 }} />
              <b style={{ flex: 1, height: 36, borderRadius: 6 }} />
            </div>
            <div className="frame row" style={{ flex: 1, alignItems: "flex-end", gap: "6%" }}>
              {[40, 65, 30, 80, 55, 95, 70].map((h, i) => (
                <b key={i} className={i === 5 ? "a" : ""} style={{ flex: 1, height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      );
    case "folio":
      return (
        <div className="wf" style={{ justifyContent: "space-between" }}>
          <div className="serif" style={{ fontSize: "clamp(4rem, 7vw, 6.5rem)" }}>
            Aa<span style={{ color: "var(--signal)" }}>.</span>
          </div>
          <div className="row" style={{ height: "42%" }}>
            <b className="s" style={{ flex: 2, borderRadius: 6 }} />
            <b style={{ flex: 1, borderRadius: 6 }} />
            <b className="a" style={{ flex: 1, borderRadius: 6 }} />
          </div>
        </div>
      );
    case "saas":
      return (
        <div className="wf" style={{ justifyContent: "center" }}>
          <b style={{ width: "50%", height: 8, alignSelf: "center" }} />
          <div className="row" style={{ height: "64%", alignItems: "stretch" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="frame col"
                style={{
                  flex: 1,
                  gap: 6,
                  background: i === 1 ? "var(--ink)" : undefined,
                  transform: i === 1 ? "scale(1.08)" : undefined,
                }}
              >
                <b className={i === 1 ? "a" : ""} style={{ width: "60%", height: 6 }} />
                <b className={i === 1 ? "" : "s"} style={{ width: "40%", height: 14, background: i === 1 ? "var(--bone)" : undefined }} />
                <b className="s" style={{ width: "90%", height: 4, marginTop: "auto" }} />
                <b className="s" style={{ width: "80%", height: 4 }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "blog":
      return (
        <div className="wf">
          <b className="s" style={{ height: "34%", borderRadius: 8 }} />
          <b className="a" style={{ width: "20%", height: 5 }} />
          <b style={{ width: "90%", height: "9%" }} />
          <b style={{ width: "70%", height: "9%" }} />
          {[96, 88, 92, 60].map((w, i) => (
            <b key={i} className="s" style={{ width: `${w}%`, height: 4 }} />
          ))}
        </div>
      );
    case "android":
      return (
        <div className="wf" style={{ alignItems: "center", justifyContent: "center" }}>
          <div
            className="frame col"
            style={{ width: "46%", height: "100%", borderRadius: 22, padding: "8% 7%", gap: "6%", border: "2px solid var(--ink)" }}
          >
            <b style={{ width: "30%", height: 5, alignSelf: "center", borderRadius: 99 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: "10%" }}>
              {Array.from({ length: 9 }).map((_, i) => (
                <b key={i} className={i === 4 ? "a" : i % 2 ? "s" : ""} style={{ aspectRatio: "1", borderRadius: 8 }} />
              ))}
            </div>
            <b className="a pill" style={{ marginTop: "auto", height: 14 }} />
          </div>
        </div>
      );
  }
}
