import Image from "next/image";

type LifestylePhotoProps = {
  src: string;
  alt: string;
  eyebrow: string;
  compact?: boolean;
  wide?: boolean;
};

export default function LifestylePhoto({
  src,
  alt,
  eyebrow,
  compact = false,
  wide = false,
}: LifestylePhotoProps) {
  const photo = (
    <figure className={wide ? "w-full" : compact ? "mt-8 max-w-xl sm:mt-10 md:ml-auto md:mt-12" : "mx-auto max-w-6xl"}>
      <div className="mb-6 flex items-center gap-5">
        <p className="text-xs uppercase tracking-[0.25em] text-blood">
          {eyebrow}
        </p>
        <span className="h-px flex-1 bg-navy/15" aria-hidden="true" />
      </div>

      <div className="overflow-hidden bg-[#EEE8DE]">
        <Image
          src={src}
          alt={alt}
          width={1536}
          height={1024}
          sizes={wide ? "(min-width: 1280px) 1152px, 92vw" : compact ? "(min-width: 768px) 520px, 92vw" : "(min-width: 1280px) 720px, (min-width: 768px) 62vw, 92vw"}
          className={wide ? "h-56 w-full object-cover sm:h-72 md:h-96" : "aspect-[3/2] h-auto w-full object-cover"}
        />
      </div>
    </figure>
  );

  if (compact) {
    return photo;
  }

  return (
    <section className="bg-ivory px-6 py-8 sm:px-8 sm:py-10 md:px-16 md:py-14">
      <div className={wide ? "mx-auto max-w-6xl" : "mx-auto max-w-6xl md:grid md:grid-cols-12"}>
        <div className={wide ? "w-full" : "md:col-span-7 md:col-start-6"}>{photo}</div>
      </div>
    </section>
  );
}
