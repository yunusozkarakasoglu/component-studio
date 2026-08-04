/**
 * BreadcrumbsCustomSeparator
 * Custom Separator örneği — özel ayraç (saf React, kendi setimizden).
 * @id 169
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"
import { ArrowRight } from "@/components/ui/icons"

function BreadcrumbsCustomSeparator() {
  return (
    <Breadcrumbs separator={<ArrowRight className="size-3.5" />}>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Products</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Electronics</BreadcrumbsItem>
      <BreadcrumbsItem>Laptop</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsCustomSeparator }
