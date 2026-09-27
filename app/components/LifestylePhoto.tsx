import Image from "next/image";

type LifestylePhotoProps = {
  src: string;
  alt: string;
  eyebrow: string;
  compact?: boolean;
};

export default function LifestylePhoto({
  src,
  alt,
  eyebrow,
  compact = false,
}: LifestylePhotoProps) {
  const photo = (
    <figure className={compact ? "mt-20" : "mx-auto max-w-6xl"}>
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
          sizes="(min-width: 1280px) 1152px, (min-width: 768px) 88vw, 92vw"
          className="aspect-[3/2] h-auto w-full object-cover"
        />
      </div>
    </figure>
  );

  if (compact) {
    return photo;
  }

  return (
    <section className="bg-ivory px-8 py-20 md:px-16 md:py-28">
      {photo}
    </section>
  );
}
