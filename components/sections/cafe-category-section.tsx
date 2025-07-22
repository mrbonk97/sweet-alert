import { CafegoryType } from "@/lib/type";
import Link from "next/link";

interface Props {
  id: string;
  q?: string;
  category?: string;
  categories: CafegoryType[];
}

export function CafeCategorySection({ id, q, category, categories }: Props) {
  let title = "메뉴 : 전체";

  if (category) {
    const _category = categories.find((item) => item.id == category);
    if (!_category)
      throw new Error(`ID에 해당하는 카테고리를 찾을 수 없습니다. CATEGORY_ID: ${title}`);
    title = `메뉴 : ${_category.title}`;
  }

  if (q) title = `검색 : ${q}`;

  return (
    <section className="mt-2">
      <h4 className="font-semibold text-2xl opacity-80">{title}</h4>
      <nav className="mt-2 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-10 gap-2 text-xs font-semibold text-foreground/80">
        <Link
          aria-current={!category && "page"}
          href={`/cafes/${id}`}
          className="p-2 text-center bg-secondary aria-[current=page]:bg-custom-g-2 rounded-md hover:bg-custom-g-2 duration-150"
        >
          전체
        </Link>
        {categories.map((item) => (
          <Link
            key={`category-${item.id}`}
            aria-current={category === item.id && "page"}
            href={`/cafes/${id}?category=${item.id}`}
            className="p-2 text-center bg-secondary aria-[current=page]:bg-custom-g-2 rounded-md hover:bg-custom-g-2 duration-150"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </section>
  );
}
