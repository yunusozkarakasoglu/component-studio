/**
 * MtPaginationMany
 * Çok sayfalı (saf React, Mantine kaynaklı).
 * @id 1406
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationMany() {
  return <MtPagination total={100} defaultValue={50} />
}

export { MtPaginationMany }
