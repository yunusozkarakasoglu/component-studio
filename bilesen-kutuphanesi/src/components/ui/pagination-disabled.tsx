/**
 * PaginationDisabled
 * Devre dışı örnek (saf React).
 * @id 487
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"

function PaginationDisabled() {
  const [page, setPage] = useState(1)
  const totalPages = 3

  return (
    <Pagination className="justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious isDisabled onPress={() => setPage((p) => p - 1)}>
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
          <PaginationNext isDisabled onPress={() => setPage((p) => p + 1)}>
            <span>Next</span>
            <PaginationNextIcon />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PaginationDisabled }
