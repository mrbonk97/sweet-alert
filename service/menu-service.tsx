import { MenuType } from "@/types";

export async function getMenusByCafeId(
  id: string,
  category: string,
  sub: string,
  q: string | undefined,
  page: number
): Promise<{ items: MenuType[]; totalPage: number }> {
  const url = new URL(`${process.env.API_URL}/api/cafes/${id}`);
  url.searchParams.set("category", category);
  url.searchParams.set("sub", sub);
  if (q) url.searchParams.set("q", q);
  url.searchParams.set("page", page.toString());

  const res = await fetch(url);
  const { items, totalPage } = await res.json();
  return { items, totalPage };
}
