import { MenuType } from "@/types";

export async function getMenusByCafeId(id: string): Promise<MenuType[]> {
  const res = await fetch(`${process.env.BLOB_URL}/${id}.json`);
  const json = await res.json();

  return json;
}
