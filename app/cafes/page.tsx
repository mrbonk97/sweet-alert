import Link from "next/link";
import Image from "next/image";
import { orbit } from "@/lib/fonts";
import { CAFES } from "@/constants/constants";
import { HeaderImageSection } from "@/components/header-image-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카페 | 단거주의보",
};

function CafesPage() {
  return (
    <main className="pt-16 p-4 mx-auto max-w-6xl">
      {/* 헤더 영역 */}
      <header className="p-4 rounded-lg bg-custom-g-2">
        <h1 className={`${orbit.className}`}>Sweet Alert(단거주의보)</h1>
        <HeaderImageSection />
      </header>

      {/* 카페 목록 */}
      <section className="mt-8">
        <h2 className={`text-lg sm:text-2xl opacity-80 ${orbit.className}`}>카페 & 디저트</h2>
        <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {CAFES.map((item) => (
            <li key={item.id}>
              <Link
                href={`/cafes/${item.id}`}
                className="block p-4 rounded-lg bg-custom-g-3 hover:opacity-80 duration-150"
              >
                <h4 className="text-xl font-bold opacity-80">{item.title}</h4>
                <Image
                  src={`/images/logo/${item.id}.svg`}
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
