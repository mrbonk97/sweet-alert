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
    <section className="mt-10">
      <h2 className="text-2xl font-bold opacity-80">
        <Link href={"/menu?q=빙수"} className="hover:underline underline-offset-4">
          빙수 특집
        </Link>
      </h2>
      <ul className="mt-5 grid grid-cols-2 lg:grid-cols-4">
        {bingsu.map((item, idx) => {
          const isSmBorderR = idx % 2 === 0; // sm: 0, 2, 4, ... (1-based 홀수)
          const isLgBorderR = idx % 4 !== 3; // lg: 0,1,2,4,5,6,... (1-based %4 !== 0)

          return (
            <li key={`fav-${item.id}`} className="group">
              <Link
                href={`/cafes/${item.id}`}
                className={`block p-4 border-b hover:bg-custom-g-3
                ${isSmBorderR ? "border-r" : ""}
                ${isLgBorderR ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <p className="text-lg font-semibold opacity-80 group-hover:underline underline-offset-2">
                  {COFFEE_CODE[item.brand as keyof typeof COFFEE_CODE]}
                </p>
                <Image
                  src={`/images/menu/${item.brand}/${item.id}.${item.format}`}
                  alt={item.title}
                  height={512}
                  width={512}
                  className="mt-2 mx-auto h-60 w-full object-contain"
                />
                <h4 className="mt-2 text-lg font-semibold text-center opacity-80">{item.title}</h4>
                <p className="mt-2 text-lg font-semibold text-center opacity-70">{item.sugar}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
