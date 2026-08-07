/**
 * ShadcnSpinnerRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 957
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerRtl() {
  return (
    <div className="flex items-center gap-3" dir="rtl">
      <ShadcnSpinner />
      <span className="text-sm text-muted-foreground">جاري المعالجة…</span>
    </div>
  )
}

export { ShadcnSpinnerRtl }
