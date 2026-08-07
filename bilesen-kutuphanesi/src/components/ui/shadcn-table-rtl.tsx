/**
 * ShadcnTableRtl
 * RTL örneği — Arapça tablo (saf React, shadcn kaynaklı).
 * @id 924
 * @category Veri Gösterimi
 * @subcategory ShadcnTable
 * @source shadcn
 */
import {
  ShadcnTable,
  ShadcnTableBody,
  ShadcnTableCell,
  ShadcnTableHead,
  ShadcnTableHeader,
  ShadcnTableRow,
} from "@/components/ui/shadcn-table"

function ShadcnTableRtl() {
  return (
    <ShadcnTable dir="rtl">
      <ShadcnTableHeader>
        <ShadcnTableRow>
          <ShadcnTableHead className="w-[100px]">الفاتورة</ShadcnTableHead>
          <ShadcnTableHead>الحالة</ShadcnTableHead>
          <ShadcnTableHead className="text-left">المبلغ</ShadcnTableHead>
        </ShadcnTableRow>
      </ShadcnTableHeader>
      <ShadcnTableBody>
        <ShadcnTableRow>
          <ShadcnTableCell className="font-medium">INV001</ShadcnTableCell>
          <ShadcnTableCell>مدفوعة</ShadcnTableCell>
          <ShadcnTableCell className="text-left">$250.00</ShadcnTableCell>
        </ShadcnTableRow>
        <ShadcnTableRow>
          <ShadcnTableCell className="font-medium">INV002</ShadcnTableCell>
          <ShadcnTableCell>قيد الانتظار</ShadcnTableCell>
          <ShadcnTableCell className="text-left">$150.00</ShadcnTableCell>
        </ShadcnTableRow>
      </ShadcnTableBody>
    </ShadcnTable>
  )
}

export { ShadcnTableRtl }
