/**
 * MuiPaginationBasic
 * @id 2001
 * @category Navigasyon
 * @subcategory MuiPagination
 * @source mui
 */
import { useState } from "react"
import { MuiPagination } from "@/components/ui/mui-pagination"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiPaginationBasic() {
  const [page, setPage] = useState(1)
  return (
    <MuiStack spacing={3} className="items-start">
      <MuiPagination count={10} page={page} onChange={setPage} color="primary" showFirstButton showLastButton />
      <MuiPagination count={10} page={page} onChange={setPage} variant="outlined" color="secondary" />
      <p className="text-xs text-gray-500">Aktif sayfa: {page}</p>
    </MuiStack>
  )
}

export { MuiPaginationBasic }
