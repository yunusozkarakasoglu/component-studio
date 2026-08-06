/**
 * ShadcnBadgeWithSpinner
 * Yükleniyor rozetleri (saf React, shadcn kaynaklı).
 * Spinner: kütüphanenin mevcut bileşeni.
 * @id 778
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { Spinner } from "@/components/ui/spinner"
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeWithSpinner() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge variant="destructive">
        <Spinner data-icon="inline-start" />
        Deleting
      </ShadcnBadge>
      <ShadcnBadge variant="secondary">
        Generating
        <Spinner data-icon="inline-end" />
      </ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeWithSpinner }
