import { MenuType } from "@/lib/type";
import Image from "next/image";

interface Props {
  q?: string;
  menus: MenuType[];
}
export async function MenuMenuSection({ q, menus }: Props) {
  const title = q ? `검색: ${q}` : "메뉴";

  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold opacity-80">{title}</h2>
      {menus.length == 0 && (
        <p className="my-40 text-lg font-semibold opacity-80 text-center">
          검색 결과가 없습니다...
        </p>
      )}

      <ul className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
        {menus.map((item) => (
          <li key={item.id} className="p-4 w-full rounded-lg bg-custom-g-3">
            <p className="text-xl font-medium opacity-80">{item.brandKR}</p>
            <Image
              src={`/images/menu/${item.brand}/${item.id}.${item.format}`}
              alt={item.title}
              height={512}
              width={512}
              className="my-2 rounded-lg"
            />
            <h4 className="text-lg text-center font-semibold opacity-80">{item.title}</h4>
            <p className="text-lg text-center font-semibold opacity-80">{item.sugar}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
