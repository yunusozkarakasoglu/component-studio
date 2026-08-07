/**
 * ShadcnCommandRtl
 * RTL örneği — Arapça komut menüsü (saf React, shadcn kaynaklı).
 * @id 912
 * @category Combobox
 * @subcategory ShadcnCommand
 * @source shadcn
 */
import {
  ShadcnCommand,
  ShadcnCommandEmpty,
  ShadcnCommandGroup,
  ShadcnCommandInput,
  ShadcnCommandItem,
  ShadcnCommandList,
} from "@/components/ui/shadcn-command"

function ShadcnCommandRtl() {
  return (
    <ShadcnCommand className="max-w-sm rounded-lg border" dir="rtl">
      <ShadcnCommandInput placeholder="اكتب أمرًا أو ابحث…" />
      <ShadcnCommandList>
        <ShadcnCommandEmpty>لا توجد نتائج</ShadcnCommandEmpty>
        <ShadcnCommandGroup heading="اقتراحات">
          <ShadcnCommandItem value="بحث">بحث</ShadcnCommandItem>
          <ShadcnCommandItem value="فتح">فتح ملف</ShadcnCommandItem>
          <ShadcnCommandItem value="حفظ">حفظ</ShadcnCommandItem>
        </ShadcnCommandGroup>
      </ShadcnCommandList>
    </ShadcnCommand>
  )
}

export { ShadcnCommandRtl }
