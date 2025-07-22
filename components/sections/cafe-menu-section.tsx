import { MenuType } from "@/lib/type";
import Image from "next/image";
import { MenuCard } from "../menu-card";

interface Props {
  menu: MenuType[];
}

export function CafeMenuSection({ menu }: Props) {
  return (
    <section className="mt-8">
      {menu.length == 0 ? (
        <div className="mt-20">
          <Image
            src={"/images/cat/cat-suprised.png"}
            alt="cat"
            height={96}
            width={96}
            className="mx-auto"
          />
          <p className="mt-4 text-lg font-semibold opacity-80 text-center">메뉴가 없습니다...</p>
        </div>
      ) : (
        <ul className="mt-2 md:mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {menu.map((item) => (
            <MenuCard key={`menu-${item.id}`} menu={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
