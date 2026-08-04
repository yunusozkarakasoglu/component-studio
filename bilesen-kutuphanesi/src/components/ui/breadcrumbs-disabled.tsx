/**
 * BreadcrumbsDisabled
 * HeroUI Disabled State örneği (saf React).
 * @id 168
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsDisabled() {
  return (
    <Breadcrumbs isDisabled>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Products</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Electronics</BreadcrumbsItem>
      <BreadcrumbsItem>Laptop</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsDisabled }
