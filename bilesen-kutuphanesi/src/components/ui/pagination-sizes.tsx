/**
 * PaginationSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 486
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon, type PaginationSize } from "@/components/ui/pagination"

function SizePagination({ size }: { size: PaginationSize }) {
  const [page, setPage] = useState(1)
  const totalPages = 3

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-muted-foreground capitalize">{size}</span>
      <Pagination className="justify-center" size={size}>
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
    </div>
  )
}

function PaginationSizes() {
  return (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <SizePagination key={size} size={size} />
      ))}
    </div>
  )
}

export { PaginationSizes }
