/**
 * ShadcnEmptyRtl
 * RTL örneği — Arapça boş durum (saf React, shadcn kaynaklı).
 * @id 930
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import { FolderOpen } from "@/components/ui/icons"
import {
  ShadcnEmpty,
  ShadcnEmptyDescription,
  ShadcnEmptyHeader,
  ShadcnEmptyMedia,
  ShadcnEmptyTitle,
} from "@/components/ui/shadcn-empty"

function ShadcnEmptyRtl() {
  return (
    <ShadcnEmpty className="rounded-lg border border-dashed" dir="rtl">
      <ShadcnEmptyHeader>
        <ShadcnEmptyMedia variant="icon">
          <FolderOpen className="size-5" />
        </ShadcnEmptyMedia>
        <ShadcnEmptyTitle>لا توجد مشاريع بعد</ShadcnEmptyTitle>
        <ShadcnEmptyDescription>
          لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.
        </ShadcnEmptyDescription>
      </ShadcnEmptyHeader>
    </ShadcnEmpty>
  )
}

export { ShadcnEmptyRtl }
