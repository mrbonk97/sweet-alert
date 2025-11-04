import OracleDB from "oracledb";
import { clobToString, getPool } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const PAGE_SIZE = 20;

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(req: NextRequest, { params }: Props) {
  const { id } = await params;

  let pool = null;
  let conn = null;

  try {
    pool = await getPool();
    conn = await pool.getConnection();

    const sp = req.nextUrl.searchParams;
    const category = sp.get("category");
    const sub = sp.get("sub");
    const q = sp.get("q");
    const page = sp.get("page");

    if (!category) throw new Error("파라미터 category가 필요합니다.");
    if (!sub) throw new Error("파라미터 sub가 필요합니다.");

    const _page = isNaN(Number(page)) ? 1 : Number(page);

    console.log(`${id} 메뉴 조회: category: ${category}, sub: ${sub}, q:${q}, page:${page}`);

    const countRes = await conn.execute<{ TOTAL: number }>(
      `
    SELECT COUNT(*) AS total 
    FROM MENU 
    WHERE cafe_id = :id 
    AND (:q IS NULL OR title LIKE '%' || :q || '%') 
    AND (:q IS NOT NULL OR category = :category) 
    AND (:q IS NOT NULL OR (:sub = 'all' OR sub = :sub))`,
      {
        id,
        category,
        sub,
        q,
      },
      { outFormat: OracleDB.OUT_FORMAT_OBJECT }
    );

    const totalPage = Math.ceil(countRes.rows![0].TOTAL / PAGE_SIZE);

    const dataRes = await conn.execute(
      `
    SELECT * FROM MENU 
    WHERE cafe_id = :id 
    AND (:q IS NULL OR title LIKE '%' || :q || '%') 
    AND (:q IS NOT NULL OR category = :category) 
    AND (:q IS NOT NULL OR (:sub = 'all' OR sub = :sub)) 
    OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY`,
      {
        id,
        category,
        sub,
        q,
        offset: (_page - 1) * PAGE_SIZE,
        limit: PAGE_SIZE,
      },
      { outFormat: OracleDB.OUT_FORMAT_OBJECT }
    );

    const items = await Promise.all(
      dataRes.rows!.map(async (row: any) => ({
        ...row,
        NUTRITION: await clobToString(row.NUTRITION),
      }))
    );

    return NextResponse.json({ items, totalPage: totalPage });
  } catch (err) {
    console.error(err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ message: message }, { status: 400 });
  } finally {
    if (conn) await conn.close();
  }
}
