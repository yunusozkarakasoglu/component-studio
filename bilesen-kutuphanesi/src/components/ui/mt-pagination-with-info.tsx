/**
 * MtPaginationWithInfo
 * Bilgi metinli (saf React, Mantine kaynaklı).
 * @id 1408
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { useState } from "react"
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationWithInfo() {
  const [page, setPage] = useState(1)
  const perPage = 10

  return (
    <div className="flex flex-col items-start gap-2">
      <MtPagination total={10} value={page} onChange={setPage} />
      <p className="text-xs text-muted-foreground">
        Showing {(page - 1) * perPage + 1}–{page * perPage} of 100
      </p>
    </div>
  )
}

export { MtPaginationWithInfo }
