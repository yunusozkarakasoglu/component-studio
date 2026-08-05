/**
 * PaginationCustomStyles
 * Özelleştirilmiş örnek — gruplu düzen (saf React).
 * @id 493
 * @category Navigasyon
 * @subcategory Pagination
 */
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationNextIcon, PaginationPrevious, PaginationPreviousIcon } from "@/components/ui/pagination"

const linkClass = "text-muted-foreground hover:bg-muted hover:text-foreground"
const activeClass = "bg-blue-600 text-white hover:bg-blue-600"

function PaginationCustomStyles() {
  const [page, setPage] = useState(2)

  return (
    <Pagination className="justify-center">
      <PaginationContent className="gap-1 rounded-xl bg-muted/40 p-1">
        <PaginationItem>
          <PaginationPrevious
            className={linkClass}
            isDisabled={page === 1}
            onPress={() => setPage((p) => p - 1)}
          >
            <PaginationPreviousIcon />
          </PaginationPrevious>
        </PaginationItem>
        {[1, 2, 3].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              className={p === page ? activeClass : linkClass}
              isActive={p === page}
              onPress={() => setPage(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={linkClass}
            isDisabled={page === 3}
            onPress={() => setPage((p) => p + 1)}
          >
            <PaginationNextIcon />
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { PaginationCustomStyles }
