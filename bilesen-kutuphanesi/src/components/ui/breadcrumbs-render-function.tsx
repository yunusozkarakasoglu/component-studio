/**
 * BreadcrumbsRenderFunction
 * Render Function örneği — kök element özelleştirme (saf React).
 * @id 170
 * @category Breadcrumbs
 */
import { Breadcrumbs, BreadcrumbsItem } from "@/components/ui/breadcrumbs"

function BreadcrumbsRenderFunction() {
  return (
    <Breadcrumbs
      render={(props) => (
        <ol {...(props as React.OlHTMLAttributes<HTMLOListElement>)} data-custom="foo" />
      )}
    >
      <BreadcrumbsItem>Home</BreadcrumbsItem>
      <BreadcrumbsItem>Products</BreadcrumbsItem>
      <BreadcrumbsItem>Laptop</BreadcrumbsItem>
    </Breadcrumbs>
  )
}

export { BreadcrumbsRenderFunction }
