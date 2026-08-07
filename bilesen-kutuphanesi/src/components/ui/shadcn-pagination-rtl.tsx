/**
 * ShadcnPaginationRtl
 * RTL örneği — Arapça sayfalama (saf React, shadcn kaynaklı).
 * @id 845
 * @category Navigasyon
 * @subcategory ShadcnPagination
 * @source shadcn
 */
import {
  ShadcnPagination,
  ShadcnPaginationContent,
  ShadcnPaginationItem,
  ShadcnPaginationLink,
  ShadcnPaginationNext,
  ShadcnPaginationPrevious,
} from "@/components/ui/shadcn-pagination"

function ShadcnPaginationRtl() {
  return (
    <ShadcnPagination dir="rtl">
      <ShadcnPaginationContent>
        <ShadcnPaginationItem>
          <ShadcnPaginationPrevious href="#">السابق</ShadcnPaginationPrevious>
        </ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">1</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#" isActive>2</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem><ShadcnPaginationLink href="#">3</ShadcnPaginationLink></ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationNext href="#">التالي</ShadcnPaginationNext>
        </ShadcnPaginationItem>
      </ShadcnPaginationContent>
    </ShadcnPagination>
  )
}

export { ShadcnPaginationRtl }
