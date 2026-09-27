import Image from "next/image";

type ServiceIllustrationProps = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export default function ServiceIllustration({
  src,
  alt,
  portrait = false,
}: ServiceIllustrationProps) {
  return (
    <div className="mt-14 flex justify-center md:mt-20">
      <Image
        src={src}
        alt={alt}
        width={portrait ? 1024 : 1536}
        height={portrait ? 1536 : 1024}
        sizes={portrait ? "(min-width: 768px) 48vw, 92vw" : "(min-width: 768px) 76vw, 92vw"}
        className={
          portrait
            ? "max-h-[720px] w-auto max-w-full object-contain"
            : "h-auto w-full max-w-5xl object-contain"
        }
      />
    </div>
  );
}
