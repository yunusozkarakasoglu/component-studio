/**
 * ShadcnPaginationDemo
 * Temel örnek — sayfa linkleri + ellipsis (saf React, shadcn kaynaklı).
 * @id 842
 * @category Navigasyon
 * @subcategory ShadcnPagination
 * @source shadcn
 */
import {
  ShadcnPagination,
  ShadcnPaginationContent,
  ShadcnPaginationEllipsis,
  ShadcnPaginationItem,
  ShadcnPaginationLink,
  ShadcnPaginationNext,
  ShadcnPaginationPrevious,
} from "@/components/ui/shadcn-pagination"

function ShadcnPaginationDemo() {
  return (
    <ShadcnPagination>
      <ShadcnPaginationContent>
        <ShadcnPaginationItem>
          <ShadcnPaginationPrevious href="#" />
        </ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationLink href="#">1</ShadcnPaginationLink>
        </ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationLink href="#" isActive>2</ShadcnPaginationLink>
        </ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationLink href="#">3</ShadcnPaginationLink>
        </ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationEllipsis />
        </ShadcnPaginationItem>
        <ShadcnPaginationItem>
          <ShadcnPaginationNext href="#" />
        </ShadcnPaginationItem>
      </ShadcnPaginationContent>
    </ShadcnPagination>
  )
}

export { ShadcnPaginationDemo }
