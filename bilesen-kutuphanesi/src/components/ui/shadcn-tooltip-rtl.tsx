/**
 * ShadcnTooltipRtl
 * RTL örneği — Arapça tooltip (saf React, shadcn kaynaklı).
 * @id 800
 * @category Overlay
 * @subcategory ShadcnTooltip
 * @source shadcn
 */
import {
  ShadcnTooltip,
  ShadcnTooltipContent,
  ShadcnTooltipTrigger,
} from "@/components/ui/shadcn-tooltip"

function ShadcnTooltipRtl() {
  return (
    <ShadcnTooltip>
      <ShadcnTooltipTrigger>تحويم</ShadcnTooltipTrigger>
      <ShadcnTooltipContent dir="rtl">
        <p>أضف إلى المكتبة</p>
      </ShadcnTooltipContent>
    </ShadcnTooltip>
  )
}

export { ShadcnTooltipRtl }
