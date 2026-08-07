/**
 * MtPaginationDisabled
 * Devre dışı sayfalama (saf React, Mantine kaynaklı).
 * @id 1405
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationDisabled() {
  return <MtPagination total={10} disabled />
}

export { MtPaginationDisabled }
