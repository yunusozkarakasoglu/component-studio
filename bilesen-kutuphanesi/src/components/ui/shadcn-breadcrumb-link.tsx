/**
 * ShadcnBreadcrumbLinkDemo
 * Bağlantı varyantı (saf React, shadcn kaynaklı).
 * @id 852
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

function ShadcnBreadcrumbLinkDemo() {
  return (
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="/">Home</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="/components">Components</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage>
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export { ShadcnBreadcrumbLinkDemo }
