/**
 * MtPaginationSiblings
 * Geniş kardeş sayfalar (saf React, Mantine kaynaklı).
 * @id 1404
 * @category Navigasyon
 * @subcategory MtPagination
 * @source mantine
 */
import { MtPagination } from "@/components/ui/mt-pagination"

function MtPaginationSiblings() {
  return <MtPagination total={20} siblings={2} boundaries={2} />
}

export { MtPaginationSiblings }
