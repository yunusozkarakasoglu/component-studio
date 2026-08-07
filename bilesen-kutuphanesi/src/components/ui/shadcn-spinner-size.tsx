/**
 * ShadcnSpinnerSize
 * Boyutlar (saf React, shadcn kaynaklı).
 * @id 953
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <ShadcnSpinner className="size-3" />
      <ShadcnSpinner className="size-4" />
      <ShadcnSpinner className="size-6" />
      <ShadcnSpinner className="size-8" />
    </div>
  )
}

export { ShadcnSpinnerSize }
