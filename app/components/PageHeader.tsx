import Link from "next/link";
import SiteLogo from "./SiteLogo";

type PageHeaderProps = {
  light?: boolean;
};

const services = [
  ["NIE", "/nie-espagne"],
  ["Immatriculer mon véhicule", "/immatriculation-voiture-espagne"],
  ["M’installer en Espagne", "/installation-espagne"],
  ["Faire reconnaître mon diplôme", "/reconnaissance-diplome-espagne"],
  ["Créer mon activité", "/creer-activite-espagne"],
  ["Fiscalité France–Espagne", "/fiscalite-residence-france-espagne"],
  ["Autre démarche", "/autre-demarche"],
];

export default function PageHeader({ light = false }: PageHeaderProps) {
  const text = light ? "text-ivory" : "text-navy";
  const panel = light ? "bg-navy text-ivory border-ivory/15" : "bg-ivory text-navy border-navy/15";

  return (
    <header className={`relative z-50 px-6 py-6 sm:px-8 md:px-16 md:py-8 ${text}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8">
        <SiteLogo light={light} />

        <nav
          className="hidden items-center gap-7 lg:flex"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          <div className="group relative">
            <Link
              href="/#services"
              className="flex items-center gap-2 text-lg transition-colors hover:text-blood"
            >
              Services <span className="text-xs">↓</span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className={`border p-3 shadow-sm ${panel}`}>
                {services.map(([label, href], index) => (
                  <Link
                    key={href}
                    href={href}
                    className="grid grid-cols-[32px_1fr] items-center border-b border-current/10 px-3 py-3 text-base transition-colors last:border-b-0 hover:text-blood"
                  >
                    <span className="text-xs text-blood">0{index + 1}</span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/guides" className="text-lg transition-colors hover:text-blood">Guides</Link>
          <Link href="/comment-ca-marche" className="text-lg transition-colors hover:text-blood">Comment ça marche</Link>
          <Link href="/a-propos" className="text-lg transition-colors hover:text-blood">À propos</Link>
          <Link href="/collaborateurs" className="text-lg transition-colors hover:text-blood">Notre réseau</Link>
          <Link
            href="/demande"
            className={`border px-4 py-2 text-sm transition-colors hover:border-blood hover:text-blood ${light ? "border-ivory/40" : "border-navy/30"}`}
          >
            Demande →
          </Link>
        </nav>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.14em]">
            Menu
          </summary>
          <div className={`absolute right-0 top-9 w-[min(82vw,330px)] border p-5 shadow-md ${panel}`}>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-blood">Services</p>
            {services.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-current/10 py-2.5 text-sm">
                {label}
              </Link>
            ))}
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/guides">Guides</Link>
              <Link href="/comment-ca-marche">Comment ça marche</Link>
              <Link href="/a-propos">À propos</Link>
              <Link href="/collaborateurs">Notre réseau</Link>
              <Link href="/demande" className="mt-1 text-blood">Faire une demande →</Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
