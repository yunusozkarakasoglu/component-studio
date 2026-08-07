/**
 * ShadcnSeparatorRtl
 * RTL örneği — Arapça ayraç (saf React, shadcn kaynaklı).
 * @id 963
 * @category Genel
 * @subcategory ShadcnSeparator
 * @source shadcn
 */
import { ShadcnSeparator } from "@/components/ui/shadcn-separator"

function ShadcnSeparatorRtl() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm" dir="rtl">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">أساس نظام التصميم الخاص بك</div>
      </div>
      <ShadcnSeparator />
      <div>مجموعة من المكونات المصممة بعناية يمكنك تخصيصها وتوسيعها.</div>
    </div>
  )
}

export { ShadcnSeparatorRtl }
