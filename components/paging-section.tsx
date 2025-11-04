import Link from "next/link";

interface Props {
  id: string;
  curPage: number;
  totalPages: number;
  category: string;
  sub: string;
  q?: string;
}

export function PagingSection({ id, curPage, totalPages, category, sub, q }: Props) {
  const visibleCount = 5;

  // 중앙 정렬 로직
  let startPage = Math.max(curPage - Math.floor(visibleCount / 2), 1);
  let endPage = startPage + visibleCount - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visibleCount + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <section className="mt-20 flex justify-center gap-4">
      {pages.map((page) => {
        let params = null;

        if (!q)
          params = new URLSearchParams({
            category,
            sub,
            page: page.toString(),
          });
        else {
          params = new URLSearchParams({
            q,
            page: page.toString(),
          });
        }

        return (
          <Link
            key={`page-${page}`}
            href={`/cafes/${id}?${params.toString()}`}
            aria-current={curPage === page ? "page" : undefined}
            className="p-2 font-medium aria-[current='page']:opacity-100 opacity-50 duration-150"
          >
            {page}
          </Link>
        );
      })}
    </section>
  );
}
