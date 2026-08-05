/**
 * PaginationCustomIcons
 * Özel ikon örneği — kendi setimizden ok ikonları (saf React).
 * @id 492
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@/components/ui/icons"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"

function PaginationCustomIcons() {
  const [page, setPage] = useState(1)
  const totalPages = 3

  return (
    <Pagination className="justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
            <PaginationPreviousIcon>
              <ArrowLeft className="size-4" />
            </PaginationPreviousIcon>
            <span>Back</span>
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
            <span>Forward</span>
            <PaginationNextIcon>
              <ArrowRight className="size-4" />
            </PaginationNextIcon>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PaginationCustomIcons }
