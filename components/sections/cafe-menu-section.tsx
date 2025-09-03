import { MenuType } from "@/lib/type";
import { Popsicle } from "lucide-react";
import { MenuList } from "@/components/menu-list";

interface Props {
  menu: MenuType[];
}

export function CafeMenuSection({ menu }: Props) {
  return (
    <section className="mt-2">
      {menu.length == 0 ? (
        <div className="mt-16 text-custom-g-1">
          <Popsicle className="mx-auto pr-6" size={96} />
          <p className="mt-4 text-xl font-semibold text-center">
            메뉴가 없습니다.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {menu.map((item) => (
            <MenuList key={item.id} info={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
