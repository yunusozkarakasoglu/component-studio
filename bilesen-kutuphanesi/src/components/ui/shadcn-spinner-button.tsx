/**
 * ShadcnSpinnerButton
 * Buton içinde spinner (saf React, shadcn kaynaklı).
 * @id 954
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerButton() {
  return (
    <div className="flex gap-2">
      <ShadcnButton disabled>
        <ShadcnSpinner data-icon="inline-start" /> Processing…
      </ShadcnButton>
      <ShadcnButton variant="outline" disabled>
        <ShadcnSpinner data-icon="inline-start" /> Loading
      </ShadcnButton>
    </div>
  )
}

export { ShadcnSpinnerButton }
