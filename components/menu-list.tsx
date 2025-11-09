import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { orbit } from "@/lib/fonts";
import { MenuType } from "@/types";

interface Props {
  menu: MenuType;
}
export function MenuList({ menu }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="p-4 flex flex-col justify-between rounded-lg bg-secondary cursor-pointer hover:bg-custom-g-3 duration-150">
          <header>
            <h4 className="font-semibold opacity-80 break-keep">{menu.title}</h4>
          </header>
          <ol className="mt-16 text-sm font-medium text-right opacity-80">
            <li>당류: {menu.nutrition.sugar || "-"}</li>
            <li>용량: {menu.volume || "-"}</li>
            <li>칼로리: {menu.nutrition.calories || "-"}</li>
          </ol>
        </li>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{menu.title}</DialogTitle>
          <DialogDescription>{menu.titleEng}</DialogDescription>
        </DialogHeader>

        <div>
          <p className="text-sm font-medium opacity-80 break-keep">{menu.description}</p>

          <div className={`mt-8 ${orbit.className} text-custom-g-1`}>제품 영양 정보</div>
          <div className="mt-2 text-sm font-medium">
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>칼로리</dt>
              <dd>{menu.nutrition.calories || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>설탕</dt>
              <dd>{menu.nutrition.sodium || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>탄수화물</dt>
              <dd>{menu.nutrition.carbs || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>카페인</dt>
              <dd>{menu.nutrition.caffeine || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>나트륨</dt>
              <dd>{menu.nutrition.sodium || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>단백질</dt>
              <dd>{menu.nutrition.protein || "-"}</dd>
            </dl>
            <dl className="p-4 grid grid-cols-3 gap-4 border-t">
              <dt>포화지방</dt>
              <dd>{menu.nutrition.saturatedFat || "-"}</dd>
            </dl>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
