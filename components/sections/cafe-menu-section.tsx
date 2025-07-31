import { MenuType } from "@/lib/type";
import { MenuCard } from "@/components/menu-card";
import { Popsicle } from "lucide-react";

interface Props {
  menu: MenuType[];
}

export function CafeMenuSection({ menu }: Props) {
  return (
    <section className="mt-8">
      {menu.length == 0 ? (
        <div className="mt-20 text-custom-g-1">
          <Popsicle className="mx-auto pr-6" size={96} />
          <p className="mt-4 text-xl font-semibold text-center">메뉴가 없습니다.</p>
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
