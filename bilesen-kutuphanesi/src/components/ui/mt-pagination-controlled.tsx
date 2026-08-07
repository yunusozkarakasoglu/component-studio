/**
 * MtPaginationControlled
 * Kontrollü sayfalama (saf React, Mantine kaynaklı).
 * @id 1402
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { useState } from "react"
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationControlled() {
  const [page, setPage] = useState(3)

  return (
    <div className="flex flex-col items-start gap-2">
      <MtPagination total={10} value={page} onChange={setPage} />
      <p className="text-xs text-muted-foreground">Current page: {page}</p>
    </div>
  )
}

export { MtPaginationControlled }
