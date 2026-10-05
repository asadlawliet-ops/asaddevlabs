import Image from "next/image";

export type LogoVariant = "dark" | "light" | "auto";

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  alt?: string;
  priority?: boolean;
}

/**
 * Authentic AsadDevLabs Editorial Wordmark.
 * Uses the pristine high-resolution transparent PNG assets directly from the brand kit.
 * - 'light': White wordmark for dark backgrounds & difference-blend surfaces.
 * - 'dark': Ink-black wordmark for light backgrounds.
 * - 'auto': Defaults to light variant which automatically inverts under mix-blend-mode: difference.
 */
export function Logo({
  className = "",
  variant = "light",
  alt = "AsadDevLabs",
  priority = false,
}: LogoProps) {
  const isDark = variant === "dark";
  const src = isDark ? "/logo-black.png" : "/logo-white.png";
  const width = isDark ? 1308 : 1461;
  const height = isDark ? 189 : 210;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`adl-logo adl-logo--${variant} ${className}`}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        aspectRatio: `${width} / ${height}`,
      }}
    />
  );
}

/** Retained for backwards-compatibility; sprite no longer needed with authentic raster PNGs */
export function LogoSprite() {
  return null;
}
