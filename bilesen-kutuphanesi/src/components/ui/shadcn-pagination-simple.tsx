/**
 * ShadcnPaginationSimple
 * Yalnız sayfa numaraları (saf React, shadcn kaynaklı).
 * @id 843
 * @category Navigasyon
 * @subcategory ShadcnPagination
 * @source shadcn
 */
import {
  ShadcnPagination,
  ShadcnPaginationContent,
  ShadcnPaginationItem,
  ShadcnPaginationLink,
} from "@/components/ui/shadcn-pagination"

function ShadcnPaginationSimple() {
  return (
    <ShadcnPagination>
      <ShadcnPaginationContent>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">1</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#" isActive>2</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">3</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">4</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">5</ShadcnPaginationLink></ShadcnPaginationItem>
      </ShadcnPaginationContent>
    </ShadcnPagination>
  )
}

export { ShadcnPaginationSimple }
