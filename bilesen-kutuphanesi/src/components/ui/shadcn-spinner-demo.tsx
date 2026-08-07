/**
 * ShadcnSpinnerDemo
 * Temel örnek — ödeme işleniyor satırı (saf React, shadcn kaynaklı).
 * @id 951
 * @category Yükleme & İlerleme
 * @subcategory ShadcnSpinner
 * @source shadcn
 */
import { ShadcnSpinner } from "@/components/ui/shadcn-spinner"

function ShadcnSpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3 rounded-lg border border-border p-3">
      <ShadcnSpinner />
      <div className="flex-1 text-sm font-medium">Processing payment...</div>
      <span className="text-sm tabular-nums text-muted-foreground">$100.00</span>
    </div>
  )
}

export { ShadcnSpinnerDemo }
