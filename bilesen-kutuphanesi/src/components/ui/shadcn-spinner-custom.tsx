/**
 * ShadcnSpinnerCustom
 * Özel spinner (saf React, shadcn kaynaklı).
 * @id 952
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <ShadcnSpinner />
    </div>
  )
}

export { ShadcnSpinnerCustom }
