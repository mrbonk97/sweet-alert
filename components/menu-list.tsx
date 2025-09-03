import { MenuType } from "@/lib/type";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface Props {
  info: MenuType;
}

export const MenuList = ({ info }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="p-4 rounded-lg bg-custom-g-3 cursor-pointer">
          <h4 className="hidden sm:block break-keep opacity-80">
            {info.title}
          </h4>
          <Image
            src={`/images/menu/${info.brand}/${info.id}.${info.format}`}
            alt={info.title}
            height={512}
            width={512}
            className="sm:mt-2 mx-auto rounded-lg"
          />
          <h4 className="mt-2 sm:hidden text-sm text-center break-keep opacity-80">
            {info.title}
          </h4>
          <div className="mt-4 text-center sm:text-lg text-primary/80">
            {info.volume && <div>용량: {info.volume}</div>}
            {info.sugar && <div>당류: {info.sugar}</div>}
          </div>
        </li>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{info.title} 영양성분</DialogTitle>
          <DialogDescription>{info.description}</DialogDescription>
        </DialogHeader>
        <div className="p-4 font-semibold">
          <div className="p-4 bg-primary/80 text-primary-foreground flex justify-between">
            <h5 className="text-3xl sm:text-4xl">영양성분</h5>
            <div>
              <div className="text-right text-sm sm:text-xl">
                총 내용량 {info.volume ? info.volume : "-"}
              </div>
              <div className="text-right text-base sm:text-2xl">
                {info.calories ? info.calories : "-"}
              </div>
            </div>
          </div>
          <ul className="border-primary/80 border-2">
            <li className="p-2 grid grid-cols-5 gap-2">
              <div className="col-span-2">나트륨</div>
              <div className="col-span-3">
                {info.sodium ? info.sodium : "-"}
              </div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">탄수화물</div>
              <div className="col-span-3">
                {info.carbohydrate ? info.carbohydrate : "-"}
              </div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">당류</div>
              <div>{info.sugar ? info.sugar : "-"}</div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">카페인</div>
              <div className="col-span-3">
                {info.caffein ? info.caffein : "-"}
              </div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">지방</div>
              <div className="col-span-3">{info.fat ? info.fat : "-"}</div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">포화지방</div>
              <div className="col-span-3">
                {info.saturatedFat ? info.saturatedFat : "-"}
              </div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">단백질</div>
              <div className="col-span-3">
                {info.protein ? info.protein : "-"}
              </div>
            </li>
            <li className="p-2 grid grid-cols-5 gap-2 border-t-primary/80 border-t-2">
              <div className="col-span-2">카페인</div>
              <div className="col-span-3">
                {info.caffein ? info.caffein : "-"}
              </div>
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
