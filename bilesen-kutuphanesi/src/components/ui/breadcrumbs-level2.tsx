/**
 * BreadcrumbsLevel2
 * Navigation Levels örneği — 2 seviye (saf React).
 * @id 166
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsLevel2() {
  return (
    <Breadcrumbs>
      <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem>Current Page</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsLevel2 }
