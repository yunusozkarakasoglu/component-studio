/**
 * ShadcnDialogRtl
 * RTL örneği — Arapça dialog (saf React, shadcn kaynaklı).
 * @id 788
 * @category Overlay
 * @subcategory ShadcnDialog
 * @source shadcn
 */
import {
  ShadcnDialog,
  ShadcnDialogClose,
  ShadcnDialogContent,
  ShadcnDialogDescription,
  ShadcnDialogFooter,
  ShadcnDialogHeader,
  ShadcnDialogTitle,
  ShadcnDialogTrigger,
} from "@/components/ui/shadcn-dialog"

function ShadcnDialogRtl() {
  return (
    <ShadcnDialog>
      <ShadcnDialogTrigger>افتح الحوار</ShadcnDialogTrigger>
      <ShadcnDialogContent className="sm:max-w-sm" dir="rtl">
        <ShadcnDialogHeader>
          <ShadcnDialogTitle>تعديل الملف الشخصي</ShadcnDialogTitle>
          <ShadcnDialogDescription>
            قم بإجراء التغييرات على ملفك الشخصي هنا.
          </ShadcnDialogDescription>
        </ShadcnDialogHeader>
        <ShadcnDialogFooter>
          <ShadcnDialogClose>إغلاق</ShadcnDialogClose>
        </ShadcnDialogFooter>
      </ShadcnDialogContent>
    </ShadcnDialog>
  )
}

export { ShadcnDialogRtl }
