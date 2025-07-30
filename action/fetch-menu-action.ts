import { COFFEE_BRANDS } from "@/constants/constants";
import { MenuType } from "@/lib/type";

export async function fetchMenuAction(q: string | undefined) {
  const results = await Promise.all(
    COFFEE_BRANDS.map(async (item) => {
      try {
        const res = await fetch(`${process.env.API_URL}/data/${item.id}.json`);
        if (!res.ok) return { id: item.id, data: [] };

        const menu: MenuType[] = await res.json();
        const filtered = q
          ? menu.filter((f) => f.title.includes(q) || f.brandKR.includes(q))
          : menu;
        return { id: item.id, data: filtered };
      } catch (error) {
        console.error(`데이터 가져오기 실패 ${item.id}:`, error);
        return { id: item.id, data: [] };
      }
    })
  );

  const allMenus = results.flatMap((r) => r.data);

  return allMenus;
}
