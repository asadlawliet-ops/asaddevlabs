import { LOGO_PATH, LOGO_VIEWBOX } from "@/lib/logo-path";

/** Rendered once in <body>; every logo instance references it via <use>. */
export function LogoSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="adl-logo" viewBox={LOGO_VIEWBOX}>
        <path fill="currentColor" d={LOGO_PATH} />
      </symbol>
    </svg>
  );
}

export function Logo({ className, title = "AsadDevLabs" }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox={LOGO_VIEWBOX} role="img" aria-label={title}>
      <use href="#adl-logo" />
    </svg>
  );
}
