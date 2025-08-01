import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CafeHomeHeader } from "@/components/cafe-home-header";
import { COFFEE_BRANDS } from "@/constants/constants";

export const metadata: Metadata = {
  title: "카페 | 단거주의보",
};

function CafesPage() {
  return (
    <main className="mt-12 p-4 mx-auto max-w-7xl">
      <CafeHomeHeader />
      <section className="mt-4">
        <h2 className="text-lg sm:text-2xl font-semibold opacity-80">카페 & 디저트</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
          {COFFEE_BRANDS.map((item) => (
            <li key={item.id}>
              <Link
                href={`/cafes/${item.id}`}
                className="block p-4 w-full rounded-lg bg-custom-g-3 hover:opacity-80 duration-150"
              >
                <h2 className="text-xl font-bold opacity-80">{item.title}</h2>
                <Image
                  src={item.icon}
                  alt={item.title}
                  height={160}
                  width={160}
                  className="my-10 mx-auto h-40 w-40 object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default CafesPage;
