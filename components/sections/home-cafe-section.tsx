import { COFFEE_BRANDS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

export function HomeCafeSection() {
  const list = COFFEE_BRANDS.slice(0, 6);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold opacity-80">
        <Link href={"/cafes"} className="hover:underline underline-offset-4">
          인기브랜드
        </Link>
      </h2>
      <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {list.map((item, idx) => (
          <li key={`fav-${item.id}`}>
            <Link
              href={`/cafes/${item.id}`}
              className={`
                ${idx == 0 && "lg:rounded-l-2xl lg:border-l border-t border-b border-r"}
                ${idx == 1 && "border-t border-b md:border-r"}
                ${idx == 2 && "md:border-t border-b border-r md:border-r-0 lg:border-r"}
                ${idx == 3 && "lg:border-t border-b md:border-r"}
                ${idx == 4 && "lg:border-t border-b border-r"}
                ${idx == 5 && "lg:rounded-r-2xl lg:border-t lg:border-r border-b "}
                p-4 h-52 flex items-center justify-center hover:bg-secondary duration-150`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                height={128}
                width={128}
                className="mx-auto h-32"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
