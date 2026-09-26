import Link from "next/link";

const footerLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/guides", label: "Guides" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer className="bg-ivory px-8 py-10 text-navy md:px-16">
      <div className="mx-auto max-w-7xl border-t border-navy/15 pt-8">
        <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-navy/50">
              © {new Date().getFullYear()} holÀ!
            </p>
            <p className="mt-2 text-sm text-navy/50">
              Bordeaux · France ↔ Espagne
            </p>
          </div>

          <nav
            aria-label="Navigation de pied de page"
            className="flex max-w-2xl flex-wrap gap-x-8 gap-y-3 text-sm text-navy/55"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-blood"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm leading-relaxed text-navy/55 md:text-right">
            <a
              href="mailto:bonjour@holaespagne.fr"
              className="block transition-colors hover:text-blood"
            >
              bonjour@holaespagne.fr
            </a>
            <a
              href="tel:+34681803938"
              className="mt-1 block transition-colors hover:text-blood"
            >
              +34 681 803 938
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
