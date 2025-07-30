import { MenuHeaderSection } from "@/components/sections/menu-header-section";
import { MenuMenuSection } from "@/components/sections/menu-menu-section";
import { MenuPagenationSection } from "@/components/sections/menu-pagenation-section";
import { fetchMenuAction } from "@/action/fetch-menu-action";
import { MenuType } from "@/lib/type";

interface Props {
  searchParams: Promise<{ q: string; page: string }>;
}

async function MenuPage({ searchParams }: Props) {
  const { q, page } = await searchParams;
  let curPage = page ? parseInt(page) : 1;
  if (curPage < 1) curPage = 1;

  const menus: MenuType[] = await fetchMenuAction(q);

  const lastPageIdx =
    menus.length % 20 == 0 ? menus.length / 20 : Math.floor(menus.length / 20) + 1;

  return (
    <main className="mt-12 p-4 mx-auto max-w-7xl">
      <MenuHeaderSection />
      <MenuMenuSection q={q} menus={menus.slice(20 * (curPage - 1), 20 * curPage)} />
      <MenuPagenationSection q={q} curPage={curPage} lastPageIdx={lastPageIdx} />
    </main>
  );
}

export default MenuPage;
