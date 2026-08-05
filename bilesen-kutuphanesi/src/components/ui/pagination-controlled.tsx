/**
 * PaginationControlled
 * Kontrollü örnek: 12 sayfa + ellipsis mantığı (saf React).
 * @id 489
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon, PaginationSummary } from "@/components/ui/pagination"

function PaginationControlled() {
  const [page, setPage] = useState(1)
  const totalPages = 12
  const itemsPerPage = 10
  const totalItems = 120

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (page > 3) pages.push("ellipsis")
      const start = Math.max(2, page - 1)
      const end = Math.min(totalPages - 1, page + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (page < totalPages - 2) pages.push("ellipsis")
      pages.push(totalPages)
    }
    return pages
  }

  const startItem = (page - 1) * itemsPerPage + 1
  const endItem = Math.min(page * itemsPerPage, totalItems)

  return (
    <Pagination>
      <PaginationSummary>
        Showing {startItem}-{endItem} of {totalItems} results
      </PaginationSummary>
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
  )
}

export { PaginationControlled }
