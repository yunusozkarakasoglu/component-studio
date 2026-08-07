/**
 * ShadcnCollapsibleRtl
 * RTL örneği — Arapça açılır panel (saf React, shadcn kaynaklı).
 * @id 937
 * @category Veri Gösterimi
 * @subcategory ShadcnCollapsible
 * @source shadcn
 */
import { ChevronDown } from "@/components/ui/icons"
import {
  ShadcnCollapsible,
  ShadcnCollapsibleContent,
  ShadcnCollapsibleTrigger,
} from "@/components/ui/shadcn-collapsible"

function ShadcnCollapsibleRtl() {
  return (
    <ShadcnCollapsible className="w-[350px]" dir="rtl">
      <ShadcnCollapsibleTrigger className="w-full justify-between rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
        <span>تفاصيل الطلب</span>
        <ChevronDown className="size-4 text-muted-foreground" />
      </ShadcnCollapsibleTrigger>
      <ShadcnCollapsibleContent className="mt-2 rounded-md border px-4 py-3 text-sm text-muted-foreground">
        <p>رقم التتبع: 1Z999AA10123456784</p>
        <p className="mt-2">الحالة: تم الشحن</p>
      </ShadcnCollapsibleContent>
    </ShadcnCollapsible>
  )
}

export { ShadcnCollapsibleRtl }
