/**
 * PaginationWithEllipsis
 * Ellipsis'li örnek: 12 sayfa (saf React).
 * @id 490
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"

function PaginationWithEllipsis() {
  const [page, setPage] = useState(1)
  const totalPages = 12

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = []
    pages.push(1)
    if (page > 3) pages.push("ellipsis")
    const start = Math.max(2, page - 1)
    const end = Math.min(totalPages - 1, page + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (page < totalPages - 2) pages.push("ellipsis")
    pages.push(totalPages)
    return pages
  }

  return (
    <div className="w-full overflow-x-auto">
      <Pagination className="justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
              <PaginationPreviousIcon />
              <span>Previous</span>
            </PaginationPrevious>
          </PaginationItem>
          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${i}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={p}>
                <PaginationLink isActive={p === page} onPress={() => setPage(p)}>
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
              <span>Next</span>
              <PaginationNextIcon />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export { PaginationWithEllipsis }
