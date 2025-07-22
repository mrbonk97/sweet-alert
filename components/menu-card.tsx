import { MenuType } from "@/lib/type";
import Image from "next/image";
interface Props {
  menu: MenuType;
}

export function MenuCard({ menu }: Props) {
  return (
    <div className="p-4 rounded-lg bg-custom-g-3">
      <h4 className="hidden sm:block text-xs sm:text-lg break-keep font-semibold opacity-80">
        {menu.title}
      </h4>
      <Image
        src={`/images/menu/${menu.brand}/${menu.id}.${menu.format}`}
        alt={menu.title}
        height={512}
        width={512}
        className="sm:mt-2 mx-auto rounded-lg"
      />
      <h4 className="mt-2 sm:hidden text-sm sm:text-lg text-center break-keep font-semibold opacity-80">
        {menu.title}
      </h4>
      <div className="mt-4">
        {menu.volume && (
          <div className="text-center sm:text-lg font-semibold text-primary/80">
            용량: {menu.volume}
          </div>
        )}
        {menu.sugar && (
          <div className="mb-2 text-center sm:text-lg font-semibold text-primary/80">
            당류: {menu.sugar}
          </div>
        )}
      </div>
    </div>
  );
}
