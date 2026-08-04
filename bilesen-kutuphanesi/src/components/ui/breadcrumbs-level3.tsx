/**
 * BreadcrumbsLevel3
 * HeroUI Navigation Levels örneği — 3 seviye (saf React).
 * @id 167
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsLevel3() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="#">Category</BreadcrumbsItem>
      <BreadcrumbsItem>Current Page</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsLevel3 }
