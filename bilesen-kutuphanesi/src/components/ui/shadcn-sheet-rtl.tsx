/**
 * ShadcnSheetRtl
 * RTL örneği — Arapça panel (saf React, shadcn kaynaklı).
 * @id 825
 * @category Overlay
 * @subcategory ShadcnSheet
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnLabel } from "@/components/ui/shadcn-label"
import {
  ShadcnSheet,
  ShadcnSheetClose,
  ShadcnSheetContent,
  ShadcnSheetDescription,
  ShadcnSheetFooter,
  ShadcnSheetHeader,
  ShadcnSheetTitle,
  ShadcnSheetTrigger,
} from "@/components/ui/shadcn-sheet"

function ShadcnSheetRtl() {
  return (
    <ShadcnSheet>
      <ShadcnSheetTrigger>فتح اللوحة</ShadcnSheetTrigger>
      <ShadcnSheetContent dir="rtl">
        <ShadcnSheetHeader>
          <ShadcnSheetTitle>تعديل الملف الشخصي</ShadcnSheetTitle>
          <ShadcnSheetDescription>
            قم بإجراء التغييرات على ملفك الشخصي هنا.
          </ShadcnSheetDescription>
        </ShadcnSheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6">
          <div className="grid gap-3">
            <ShadcnLabel htmlFor="sheet-rtl-name">الاسم</ShadcnLabel>
            <ShadcnInput id="sheet-rtl-name" defaultValue="بيدرو دوارتي" dir="rtl" />
          </div>
        </div>
        <ShadcnSheetFooter>
          <ShadcnButton type="submit">حفظ التغييرات</ShadcnButton>
          <ShadcnSheetClose>إغلاق</ShadcnSheetClose>
        </ShadcnSheetFooter>
      </ShadcnSheetContent>
    </ShadcnSheet>
  )
}

export { ShadcnSheetRtl }
