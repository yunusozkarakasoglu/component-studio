/**
 * ShadcnTableFooterExample
 * Ayak satırlı tablo — toplam (saf React, shadcn kaynaklı).
 * @id 922
 * @category Veri Gösterimi
 * @subcategory ShadcnTable
 * @source shadcn
 */
import {
  ShadcnTable,
  ShadcnTableBody,
  ShadcnTableCell,
  ShadcnTableFooter,
  ShadcnTableHead,
  ShadcnTableHeader,
  ShadcnTableRow,
} from "@/components/ui/shadcn-table"

function ShadcnTableFooterExample() {
  return (
    <ShadcnTable>
      <ShadcnTableHeader>
        <ShadcnTableRow>
          <ShadcnTableHead>Product</ShadcnTableHead>
          <ShadcnTableHead className="text-right">Price</ShadcnTableHead>
          <ShadcnTableHead className="text-right">Quantity</ShadcnTableHead>
        </ShadcnTableRow>
      </ShadcnTableHeader>
      <ShadcnTableBody>
        <ShadcnTableRow>
          <ShadcnTableCell>Laptop</ShadcnTableCell>
          <ShadcnTableCell className="text-right">$999.00</ShadcnTableCell>
          <ShadcnTableCell className="text-right">1</ShadcnTableCell>
        </ShadcnTableRow>
        <ShadcnTableRow>
          <ShadcnTableCell>Mouse</ShadcnTableCell>
          <ShadcnTableCell className="text-right">$29.00</ShadcnTableCell>
          <ShadcnTableCell className="text-right">2</ShadcnTableCell>
        </ShadcnTableRow>
      </ShadcnTableBody>
      <ShadcnTableFooter>
        <ShadcnTableRow>
          <ShadcnTableCell colSpan={1}>Total</ShadcnTableCell>
          <ShadcnTableCell className="text-right">$1057.00</ShadcnTableCell>
          <ShadcnTableCell className="text-right">3</ShadcnTableCell>
        </ShadcnTableRow>
      </ShadcnTableFooter>
    </ShadcnTable>
  )
}

export { ShadcnTableFooterExample }
