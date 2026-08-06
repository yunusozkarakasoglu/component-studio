/**
 * ShadcnBadgeRtl
 * RTL örneği — Arapça rozetler (saf React, shadcn kaynaklı).
 * @id 781
 * @category Kartlar
 * @subcategory ShadcnBadge
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"

function ShadcnBadgeRtl() {
  return (
    <div className="flex flex-wrap gap-2" dir="rtl">
      <ShadcnBadge>جديد</ShadcnBadge>
      <ShadcnBadge variant="secondary">ثانوي</ShadcnBadge>
      <ShadcnBadge variant="outline">مخطط تفصيلي</ShadcnBadge>
    </div>
  )
}

export { ShadcnBadgeRtl }
