/**
 * ShadcnMarkerRtl
 * RTL örneği — Arapça işaretçi (saf React, shadcn kaynaklı).
 * @id 995
 * @category Genel
 * @subcategory ShadcnMarker
 * @source shadcn
 */
import { GitBranch } from "@/components/ui/icons"
import {
  ShadcnMarker,
  ShadcnMarkerContent,
  ShadcnMarkerIcon,
} from "@/components/ui/shadcn-marker"

function ShadcnMarkerRtl() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12" dir="rtl">
      <ShadcnMarker>
        <ShadcnMarkerIcon><GitBranch className="size-3.5" /></ShadcnMarkerIcon>
        <ShadcnMarkerContent>تم التبديل إلى فرع جديد</ShadcnMarkerContent>
      </ShadcnMarker>
      <ShadcnMarker variant="separator">
        <ShadcnMarkerContent>تم ضغط المحادثة</ShadcnMarkerContent>
      </ShadcnMarker>
    </div>
  )
}

export { ShadcnMarkerRtl }
