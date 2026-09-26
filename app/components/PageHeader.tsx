import Link from "next/link";
import SiteLogo from "./SiteLogo";

type PageHeaderProps = {
  light?: boolean;
};

export default function PageHeader({ light = false }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-8 md:px-16">
      <SiteLogo light={light} />

      <Link
        href="/"
        className={`text-lg transition-colors duration-300 hover:text-blood ${
          light ? "text-ivory" : "text-navy"
        }`}
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        ← Retour
      </Link>
    </header>
  );
}
