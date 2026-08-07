/**
 * ShadcnBreadcrumbEllipsisDemo
 * Daraltılmış içerik yolu — ellipsis (saf React, shadcn kaynaklı).
 * @id 851
 * @category Navigasyon
 * @subcategory ShadcnBreadcrumb
 * @source shadcn
 */
import {
  ShadcnBreadcrumb,
  ShadcnBreadcrumbEllipsis,
  ShadcnBreadcrumbItem,
  ShadcnBreadcrumbLink,
  ShadcnBreadcrumbList,
  ShadcnBreadcrumbPage,
  ShadcnBreadcrumbSeparator,
} from "@/components/ui/shadcn-breadcrumb"

function ShadcnBreadcrumbEllipsisDemo() {
  return (
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Home</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbEllipsis />
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Components</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage>
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export { ShadcnBreadcrumbEllipsisDemo }
