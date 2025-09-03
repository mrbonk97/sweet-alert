import Form from "next/form";
import { MenuType } from "@/lib/type";
import { SearchIcon } from "lucide-react";
import { COFFEE_BRANDS } from "@/constants/constants";
import { CafeHeaderSection } from "@/components/sections/cafe-header-section";
import { CafeMenuSection } from "@/components/sections/cafe-menu-section";
import { Metadata, ResolvingMetadata } from "next";
import { CafeCategorySection } from "@/components/sections/cafe-category-section";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q: string; category: string }>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const brand = COFFEE_BRANDS.find((item) => id == item.id);
  if (!brand) throw new Error("해당하는 브랜드를 찾을 수 없습니다.");

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${brand.title} | 단거주의보`,
    openGraph: {
      images: [...previousImages],
    },
  };
}

async function CafeIdPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { q, category } = await searchParams;

  const brand = COFFEE_BRANDS.find((item) => id == item.id);
  if (!brand) throw new Error("해당하는 브랜드를 찾을 수 없습니다.");

  const res = await fetch(`${process.env.API_URL}/data/${id}.json`);
  if (!res.ok) throw new Error("메뉴를 가져오는 중에 오류가 발생했습니다.");
  let menu: MenuType[] = await res.json();

  if (q) menu = menu.filter((item) => item.title.includes(q));
  if (category) menu = menu.filter((item) => item.category.includes(category));

  return (
    <main className="pt-16 p-4 mx-auto max-w-7xl">
      <CafeHeaderSection
        id={id}
        icon={brand.icon}
        title={brand.title}
        titleEng={brand.titleEng}
      />
      <Form action={`/cafes/${id}`} className="relative mt-4">
        <button
          type="submit"
          className="p-2 absolute top-1/2 -translate-y-1/2 left-2 rounded-lg hover:bg-secondary"
        >
          <span className="sr-only">검색</span>
          <SearchIcon />
        </button>
        <input
          name="q"
          autoComplete="off"
          placeholder="상품 검색"
          className="pl-14 pr-2 p-4 w-full border rounded-lg font-medium"
        />
      </Form>
      <CafeCategorySection
        id={id}
        q={q}
        category={category}
        categories={brand.categories}
      />
      <CafeMenuSection menu={menu} />
    </main>
  );
}

export default CafeIdPage;
