export default function Footer() {
  return (
    <footer className="bg-ivory px-8 py-10 text-navy md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-navy/15 pt-8 text-sm text-navy/50 md:flex-row md:items-center md:justify-between">

        <span>© {new Date().getFullYear()} holÀ!</span>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
        <a
  href="/a-propos"
  className="transition-colors hover:text-blood"
>
  À propos
</a>  
          <a
            href="/mentions-legales"
            className="transition-colors hover:text-blood"
          >
            <a
  href="/comment-ca-marche"
  className="transition-colors hover:text-blood"
>
  Comment ça marche
</a>
            Mentions légales
          </a>

          <a
            href="/politique-confidentialite"
            className="transition-colors hover:text-blood"
          >
            Confidentialité
          </a>
        </div>

      </div>
    </footer>
  );
}