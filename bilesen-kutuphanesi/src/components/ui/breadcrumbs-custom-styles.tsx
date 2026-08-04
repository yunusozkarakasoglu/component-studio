/**
 * BreadcrumbsCustomStyles
 * HeroUI Tailwind CSS örneği — kutulu görünüm (saf React).
 * @id 171
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsCustomStyles() {
  return (
    <Breadcrumbs className="rounded-lg bg-muted/50 px-3 py-2">
      <BreadcrumbsItem className="hover:text-accent-foreground" href="#">Home</BreadcrumbsItem>
      <BreadcrumbsItem className="hover:text-accent-foreground" href="#">Products</BreadcrumbsItem>
      <BreadcrumbsItem>Laptop</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsCustomStyles }
