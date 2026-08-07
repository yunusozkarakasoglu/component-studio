/**
 * MtBreadcrumbsUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1409
 * @category Navigasyon
 * @subcategory MtBreadcrumbs
 * @source mantine
 */
import { MtBreadcrumbs } from "@/components/ui/mt-breadcrumbs"

function MtBreadcrumbsUsage() {
  return (
    <MtBreadcrumbs>
      <a href="#" className="text-blue-600 hover:underline">Home</a>
      <a href="#" className="text-blue-600 hover:underline">Library</a>
      <span className="text-muted-foreground">Data</span>
    </MtBreadcrumbs>
  )
}

export { MtBreadcrumbsUsage }
