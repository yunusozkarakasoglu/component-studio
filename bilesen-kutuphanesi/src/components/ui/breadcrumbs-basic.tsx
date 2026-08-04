/**
 * BreadcrumbsBasic
 * Usage örneği (saf React).
 * @id 165
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsBasic() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Products</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Electronics</BreadcrumbsItem>
      <BreadcrumbsItem>Laptop</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsBasic }
