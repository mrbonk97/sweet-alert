import { orbitFont } from "@/lib/fonts";
import { SearchIcon } from "lucide-react";
import Form from "next/form";

export function MenuHeaderSection() {
  return (
    <header className="p-4 rounded-lg bg-custom-g-2">
      <h1 className={`text-2xl md:text-4xl font-black opacity-70 ${orbitFont.className}`}>
        Menu(메뉴)
      </h1>
      <Form action={"/menus"} className="mt-20 lg:mt-40">
        <div className="relative">
          <button
            type="submit"
            className="p-2 absolute top-1/2 -translate-y-1/2 left-2 rounded-lg hover:bg-secondary"
          >
            <span className="sr-only">검색</span>
            <SearchIcon />
          </button>
          <input
            name="q"
            placeholder="메뉴 이름을 검색해보세요"
            className="p-4 pl-12 w-full border rounded-lg bg-background"
          />
        </div>
      </Form>
    </header>
  );
}
