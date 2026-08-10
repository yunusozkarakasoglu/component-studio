/**
 * MuiBreadcrumbsBasic
 * @id 2000
 * @category Navigasyon
 * @subcategory MuiBreadcrumbs
 * @source mui
 */
import { MuiBreadcrumbs } from "@/components/ui/mui-breadcrumbs"

function MuiBreadcrumbsBasic() {
  return (
    <MuiBreadcrumbs
      items={[
        { label: "Ana Sayfa", onClick: () => alert("Ana Sayfa") },
        { label: "Ürünler", onClick: () => alert("Ürünler") },
        { label: "Detay" },
      ]}
    />
  )
}

export { MuiBreadcrumbsBasic }
