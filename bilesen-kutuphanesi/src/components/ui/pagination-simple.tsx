/**
 * PaginationSimple
 * Basit örnek: sadece Previous/Next + özet (saf React).
 * @id 488
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon, PaginationSummary } from "@/components/ui/pagination"

function PaginationSimple() {
  const [page, setPage] = useState(1)
  const totalPages = 10
  const itemsPerPage = 5
  const totalItems = 50

  const startItem = (page - 1) * itemsPerPage + 1
  const endItem = Math.min(page * itemsPerPage, totalItems)

  return (
    <Pagination className="w-full">
      <PaginationSummary>
        {startItem} to {endItem} of {totalItems} invoices
      </PaginationSummary>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
            <PaginationPreviousIcon />
            <span>Prev</span>
          </PaginationPrevious>
        </PaginationItem>
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

export { PaginationSimple }
