/**
 * ShadcnBreadcrumbRtl
 * RTL örneği — Arapça içerik yolu (saf React, shadcn kaynaklı).
 * @id 853
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

function ShadcnBreadcrumbRtl() {
  return (
    <ShadcnBreadcrumb dir="rtl">
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">الرئيسية</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbLink href="#">المكونات</ShadcnBreadcrumbLink>
        </ShadcnBreadcrumbItem>
        <ShadcnBreadcrumbSeparator />
        <ShadcnBreadcrumbItem>
          <ShadcnBreadcrumbPage>مسار التنقل</ShadcnBreadcrumbPage>
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  )
}

export { ShadcnBreadcrumbRtl }
