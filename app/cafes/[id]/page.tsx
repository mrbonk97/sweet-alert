import Image from "next/image";
import Link from "next/link";
import Form from "next/form";
import { orbit } from "@/lib/fonts";
import { Search } from "lucide-react";
import { getCafeById } from "@/lib/utils";
import { getMenusByCafeId } from "@/service/menu-service";
import { PagingSection } from "@/components/paging-section";
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cafe = getCafeById(id);

  return {
    title: `${cafe.title} | 단거주의보`,
  };
}

async function CafesIdPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { category, sub, q, page } = await searchParams;

  const cafe = getCafeById(id);

  const curCategory = cafe.category.find((c) => c.id === category) ?? cafe.category[0];
  const curSub = curCategory.sub.find((s) => s.id === sub) ?? curCategory.sub[0];
  const curPage = isNaN(Number(page)) ? 1 : Number(page);

  const { items, totalPage } = await getMenusByCafeId(id, curCategory.id, curSub.id, q, curPage);

  return (
    <main className="pt-16 p-4 mx-auto max-w-6xl">
      {/* 헤더 영역 */}
      <header className="p-4 flex gap-4 rounded-lg bg-custom-g-2">
        <Image
          src={`/images/logo/${cafe.id}.svg`}
          alt={cafe.title}
          height={128}
          width={128}
          className="p-2 h-32 w-32 rounded-lg bg-background"
        />
        <hgroup>
          <h1 className={`text-4xl font-bold ${orbit.className}`}>{cafe.title}</h1>
          <h2 className="mt-1 font-medium opacity-80">{cafe.titleEng}</h2>
        </hgroup>
      </header>

      {/* 대분류 및 검색 영역 */}
      <nav className="mt-2 flex items-center justify-between gap-2">
        <ul className="flex gap-2 shrink-0">
          {cafe.category.map((c) => (
            <li key={`category-${c.id}`} className="shrink-0">
              <Link
                href={`/cafes/${id}?category=${c.id}`}
                aria-current={!q && curCategory.id === c.id ? "page" : undefined}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-secondary hover:bg-custom-g-2 aria-[current='page']:bg-custom-g-2 duration-150"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <Form action={`/cafes/${id}`} className="relative shrink max-w-80 w-full">
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 left-2 rounded-md hover:opacity-80 duration-150"
          >
            <Search size={18} className="text-custom-g-1" />
          </button>
          <input name="q" className="p-1 pl-8 w-full rounded-lg border" />
        </Form>
      </nav>

      {/* 소분류 영역 */}
      <nav className="mt-16">
        <h4 className={`pb-1 border-b text-xl opacity-80 ${orbit.className}`}>카테고리</h4>
        <ul className="mt-2 flex lg:flex-wrap gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {curCategory.sub.map((s) => (
            <li key={`sub-${s.id}`}>
              <Link
                aria-current={!q && curSub.id === s.id ? "page" : undefined}
                href={`/cafes/${id}?category=${curCategory.id}&sub=${s.id}`}
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg bg-secondary hover:bg-custom-g-2 aria-[current='page']:bg-custom-g-2 duration-150"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 실제 메뉴 영역 */}
      <section className="mt-20">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => {
            const nutrition = JSON.parse(item.NUTRITION);

            return (
              <li key={`menu-${item.ID}`} className="p-4 text-sm rounded-lg bg-secondary">
                <h4 className="font-medium">{item.TITLE}</h4>
                <h5 className="hidden lg:block text-xs opacity-70">{item.TITLE_ENG}</h5>

                <ul className="mt-4">
                  {Object.entries(nutrition as Record<string, string>).map(([key, value]) => {
                    return (
                      <li key={key} className="flex justify-between gap-4">
                        <div>{key}:</div>
                        <div className="text-lg font-medium opacity-80">{value}</div>
                      </li>
                    );
                  })}
                  <li className="flex justify-between gap-4">
                    <div>용량:</div>
                    <div className="text-lg font-medium opacity-80">{item.VOLUME}</div>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </section>

      <PagingSection curPage={curPage} totalPages={totalPage} id={id} category={category} sub={sub} q={q} />
    </main>
  );
}

export default CafesIdPage;
