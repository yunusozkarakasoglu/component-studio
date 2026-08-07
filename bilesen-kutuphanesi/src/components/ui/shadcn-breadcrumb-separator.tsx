/**
 * ShadcnBreadcrumbSeparatorDemo
 * Özel ayraç (saf React, shadcn kaynaklı).
 * @id 849
 * @category Navigasyon
 * @subcategory ShadcnBreadcrumb
 * @source shadcn
 */
import {
  ShadcnBreadcrumb,
  ShadcnBreadcrumbItem,
  ShadcnBreadcrumbLink,
  ShadcnBreadcrumbList,
  ShadcnBreadcrumbPage,
  ShadcnBreadcrumbSeparator,
} from "@/components/ui/shadcn-breadcrumb"

function ShadcnBreadcrumbSeparatorDemo() {
  return (
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Home</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator>•</ShadcnBreadcrumbSeparator>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">Components</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator>•</ShadcnBreadcrumbSeparator>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage>
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export { ShadcnBreadcrumbSeparatorDemo }
