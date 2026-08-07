/**
 * ShadcnSpinnerBadge
 * Rozet içinde spinner (saf React, shadcn kaynaklı).
 * @id 955
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerBadge() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge variant="secondary">
        <ShadcnSpinner data-icon="inline-start" /> Syncing
      </ShadcnBadge>
      <ShadcnBadge variant="outline">
        <ShadcnSpinner data-icon="inline-start" /> Uploading
      </ShadcnBadge>
    </div>
  )
}

export { ShadcnSpinnerBadge }
