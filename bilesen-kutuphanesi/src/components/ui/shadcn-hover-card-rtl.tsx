/**
 * ShadcnHoverCardRtl
 * RTL örneği — Arapça profil kartı (saf React, shadcn kaynaklı).
 * @id 804
 * @category Overlay
 * @subcategory ShadcnHoverCard
 * @source shadcn
 */
import {
  ShadcnHoverCard,
  ShadcnHoverCardContent,
  ShadcnHoverCardTrigger,
} from "@/components/ui/shadcn-hover-card"

function ShadcnHoverCardRtl() {
  return (
    <ShadcnHoverCard>
      <ShadcnHoverCardTrigger>تحويم هنا</ShadcnHoverCardTrigger>
      <ShadcnHoverCardContent className="flex w-64 flex-col gap-0.5" dir="rtl">
        <div className="font-semibold">@nextjs</div>
        <div>إطار عمل React — تم إنشاؤه وصيانته بواسطة @vercel.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          انضم في ديسمبر 2021
        </div>
      </ShadcnHoverCardContent>
    </ShadcnHoverCard>
  )
}

export { ShadcnHoverCardRtl }
