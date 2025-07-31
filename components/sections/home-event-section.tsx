import { COFFEE_BRANDS, COFFEE_CODE } from "@/constants/constants";
import { MenuType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

// TODO: 일단은 카페 데이터가 다 없으니 오류나도 진행하도록 try catch로 감쌌음
export async function HomeEventSection() {
  const bingsu: MenuType[] = [];

  const fetchAllBingsu = async () => {
    await Promise.all(
      COFFEE_BRANDS.map(async (item) => {
        try {
          const res = await fetch(`${process.env.API_URL}/data/${item.id}.json`);
          if (!res.ok) return;

          const menu: MenuType[] = await res.json();
          menu.forEach((m) => {
            if (m.category.includes("bingsu")) {
              bingsu.push(m);
            }
          });
        } catch (error) {
          console.error(`데이터 가져오기 실패 ${item.id}:`, error);
        }
      })
    );
  };

  await fetchAllBingsu();

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold opacity-80">
        <Link href={"/menus?q=빙수"} className="hover:underline underline-offset-4">
          빙수 특집
        </Link>
      </h2>
      <ul className="mt-4 grid grid-cols-2 lg:grid-cols-4">
        {bingsu.map((item, idx) => {
          const isSmBorderR = idx % 2 === 0;
          const isLgBorderR = idx % 4 !== 3;

          return (
            <li key={`fav-${item.id}`}>
              <Link
                href={`/menus?q=${item.title}`}
                className={`block p-4 border-b hover:bg-secondary
                ${idx < 2 ? "border-t" : ""}
                ${idx >= 2 && idx < 4 ? "lg:border-t" : ""}
                ${isSmBorderR ? "border-r" : ""}
                ${isLgBorderR ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <p className="text-lg font-semibold opacity-80">
                  {COFFEE_CODE[item.brand as keyof typeof COFFEE_CODE]}
                </p>
                <Image
                  src={`/images/menu/${item.brand}/${item.id}.${item.format}`}
                  alt={item.title}
                  height={512}
                  width={512}
                  className="mt-2 mx-auto h-36 lg:h-52 w-full object-contain"
                />
                <h4 className="mt-2 font-semibold text-center opacity-80 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm font-semibold text-center opacity-70">{item.sugar}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
