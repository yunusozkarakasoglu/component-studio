/**
 * MtPaginationWithEdges
 * İlk/son sayfa butonları (saf React, Mantine kaynaklı).
 * @id 1403
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationWithEdges() {
  return <MtPagination total={10} withEdges />
}

export { MtPaginationWithEdges }
