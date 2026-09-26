import Link from "next/link";

type SiteLogoProps = {
  light?: boolean;
};

export default function SiteLogo({ light = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label="holÀ! — Accueil"
      className="inline-flex items-baseline"
    >
      <span
        className={light ? "text-ivory" : "text-navy"}
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "4.2rem",
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        hol
      </span>

      <span
        className="text-blood"
        style={{
          fontFamily: "var(--font-editorial)",
          fontSize: "4.6rem",
          fontWeight: 600,
          lineHeight: 0.8,
          marginLeft: "-0.15rem",
        }}
      >
        À!
      </span>
    </Link>
  );
}
