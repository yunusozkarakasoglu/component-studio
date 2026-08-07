/**
 * MtPaginationSmall
 * Küçük sayfalama (saf React, Mantine kaynaklı).
 * @id 1407
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationSmall() {
  return <MtPagination total={5} className="[&_button]:size-6 [&_button]:text-xs" />
}

export { MtPaginationSmall }
