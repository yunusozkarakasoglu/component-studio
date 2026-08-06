/**
 * ShadcnToggleRtl
 * RTL örneği (saf React, shadcn kaynaklı).
 * @id 731
 * @category Toggle
 * @subcategory ShadcnToggle
 * @source shadcn
 */
import { ShadcnToggle } from "@/components/ui/shadcn-toggle"

function ShadcnToggleRtl() {
  return (
    <div className="flex flex-wrap items-center gap-2" dir="rtl">
      <ShadcnToggle aria-label="Toggle bookmark">إشارة مرجعية</ShadcnToggle>
      <ShadcnToggle variant="outline" aria-label="Toggle italic">مائل</ShadcnToggle>
    </div>
  )
}

export { ShadcnToggleRtl }
