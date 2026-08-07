/**
 * ShadcnAspectRatioRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 983
 * @category Genel
 * @subcategory ShadcnAspectRatio
 * @source shadcn
 */
import { ShadcnAspectRatio } from "@/components/ui/shadcn-aspect-ratio"

function ShadcnAspectRatioRtl() {
  return (
    <ShadcnAspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted" dir="rtl">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        نسبة العرض إلى الارتفاع
      </div>
    </ShadcnAspectRatio>
  )
}

export { ShadcnAspectRatioRtl }
