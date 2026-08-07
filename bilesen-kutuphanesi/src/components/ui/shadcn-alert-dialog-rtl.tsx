/**
 * ShadcnAlertDialogRtl
 * RTL örneği — Arapça onay diyaloğu (saf React, shadcn kaynaklı).
 * @id 883
 * @category Alert & Dialog
 * @subcategory ShadcnAlertDialog
 * @source shadcn
 */
import {
  ShadcnAlertDialog,
  ShadcnAlertDialogAction,
  ShadcnAlertDialogCancel,
  ShadcnAlertDialogContent,
  ShadcnAlertDialogDescription,
  ShadcnAlertDialogFooter,
  ShadcnAlertDialogHeader,
  ShadcnAlertDialogTitle,
  ShadcnAlertDialogTrigger,
} from "@/components/ui/shadcn-alert-dialog"

function ShadcnAlertDialogRtl() {
  return (
    <ShadcnAlertDialog>
      <ShadcnAlertDialogTrigger>افتح الحوار</ShadcnAlertDialogTrigger>
      <ShadcnAlertDialogContent dir="rtl">
        <ShadcnAlertDialogHeader>
          <ShadcnAlertDialogTitle>هل أنت متأكد تمامًا؟</ShadcnAlertDialogTitle>
          <ShadcnAlertDialogDescription>
            لا يمكن التراجع عن هذا الإجراء. سيتم حذف حسابك نهائيًا.
          </ShadcnAlertDialogDescription>
        </ShadcnAlertDialogHeader>
        <ShadcnAlertDialogFooter>
          <ShadcnAlertDialogCancel>إلغاء</ShadcnAlertDialogCancel>
          <ShadcnAlertDialogAction>متابعة</ShadcnAlertDialogAction>
        </ShadcnAlertDialogFooter>
      </ShadcnAlertDialogContent>
    </ShadcnAlertDialog>
  )
}

export { ShadcnAlertDialogRtl }
