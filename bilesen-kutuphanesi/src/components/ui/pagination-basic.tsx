/**
 * PaginationBasic
 * Temel örnek: 3 sayfa (saf React).
 * @id 485
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"

function PaginationBasic() {
  const [page, setPage] = useState(1)
  const totalPages = 3

  return (
    <Pagination className="justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
            <PaginationPreviousIcon />
            <span>Previous</span>
          </PaginationPrevious>
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <PaginationItem key={p}>
            <PaginationLink isActive={p === page} onPress={() => setPage(p)}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
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

export { PaginationBasic }
