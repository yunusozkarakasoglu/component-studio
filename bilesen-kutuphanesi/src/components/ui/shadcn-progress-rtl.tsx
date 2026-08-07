/**
 * ShadcnProgressRtl
 * RTL örneği — Arapça ilerleme (saf React, shadcn kaynaklı).
 * @id 942
 * @category Yükleme & İlerleme
 * @subcategory ShadcnProgress
 * @source shadcn
 */
import { ShadcnProgress } from "@/components/ui/shadcn-progress"

function ShadcnProgressRtl() {
  return (
    <div className="flex w-[60%] flex-col gap-2" dir="rtl">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">جاري التحميل…</span>
        <span className="font-medium tabular-nums">55%</span>
      </div>
      <ShadcnProgress value={55} />
    </div>
  )
}

export { ShadcnProgressRtl }
