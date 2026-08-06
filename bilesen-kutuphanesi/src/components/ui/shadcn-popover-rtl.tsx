/**
 * ShadcnPopoverRtl
 * RTL örneği — Arapça popover (saf React, shadcn kaynaklı).
 * @id 794
 * @category Overlay
 * @subcategory ShadcnPopover
 * @source shadcn
 */
import {
  ShadcnPopover,
  ShadcnPopoverContent,
  ShadcnPopoverDescription,
  ShadcnPopoverHeader,
  ShadcnPopoverTitle,
  ShadcnPopoverTrigger,
} from "@/components/ui/shadcn-popover"

function ShadcnPopoverRtl() {
  return (
    <ShadcnPopover>
      <ShadcnPopoverTrigger>افتح النافذة</ShadcnPopoverTrigger>
      <ShadcnPopoverContent className="w-72" dir="rtl">
        <ShadcnPopoverHeader>
          <ShadcnPopoverTitle>الأبعاد</ShadcnPopoverTitle>
          <ShadcnPopoverDescription>
            عيّن أبعاد الطبقة.
          </ShadcnPopoverDescription>
        </ShadcnPopoverHeader>
        <p className="text-sm text-muted-foreground">اضبط العرض والارتفاع حسب الحاجة.</p>
      </ShadcnPopoverContent>
    </ShadcnPopover>
  )
}

export { ShadcnPopoverRtl }
