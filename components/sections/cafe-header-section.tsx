import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  icon: string;
  title: string;
  titleEng: string;
}

export function CafeHeaderSection({ id, icon, title, titleEng }: Props) {
  return (
    <header className="p-4 flex gap-4 rounded-lg bg-custom-g-2">
      <Link href={`/cafes/${id}`}>
        <Image
          src={icon}
          alt={title}
          height={96}
          width={96}
          className="p-4 w-16 md:w-20 aspect-square rounded-lg bg-white object-contain"
        />
      </Link>
      <hgroup>
        <h1 className="text-2xl md:text-4xl font-black opacity-80">{title}</h1>
        <h2 className="mt-1 md:text-2xl font-semibold opacity-70">{titleEng}</h2>
      </hgroup>
    </header>
  );
}
