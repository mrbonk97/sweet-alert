import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  q?: string;
  curPage: number;
  lastPageIdx: number;
}

export function MenuPagenationSection({ q, curPage, lastPageIdx }: Props) {
  let url = "/menus?";
  if (q) url += `q=${q}&`;

  if (curPage < 1) curPage = 1;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`${url}page=${curPage > 1 ? curPage - 1 : 1}`} />
        </PaginationItem>
        {curPage > 1 && (
          <PaginationItem>
            <PaginationLink href={`${url}page=${curPage - 1}`}>{curPage - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={`${url}page=${curPage}`} className="bg-secondary">
            {curPage}
          </PaginationLink>
        </PaginationItem>
        {curPage < lastPageIdx && (
          <PaginationItem>
            <PaginationLink href={`${url}page=${curPage + 1}`}>{curPage + 1}</PaginationLink>
          </PaginationItem>
        )}
        {curPage + 1 < lastPageIdx && (
          <PaginationItem>
            <PaginationLink href={`${url}page=${curPage + 2}`}>{curPage + 2}</PaginationLink>
          </PaginationItem>
        )}
        {curPage == 1 && curPage + 2 < lastPageIdx && (
          <PaginationItem>
            <PaginationLink href={`${url}page=${curPage + 3}`}>{curPage + 3}</PaginationLink>
          </PaginationItem>
        )}
        {curPage + 2 < lastPageIdx && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {curPage < lastPageIdx && (
          <PaginationItem>
            <PaginationNext href={`${url}page=${curPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
