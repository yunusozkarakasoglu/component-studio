/**
 * ShadcnTableDemo
 * Temel örnek — faturalar (saf React, shadcn kaynaklı).
 * @id 921
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

const invoices = [
  { invoice: "INV001", status: "Paid", amount: "$250.00", method: "Credit Card" },
  { invoice: "INV002", status: "Pending", amount: "$150.00", method: "PayPal" },
  { invoice: "INV003", status: "Unpaid", amount: "$350.00", method: "Bank Transfer" },
  { invoice: "INV004", status: "Paid", amount: "$450.00", method: "Credit Card" },
  { invoice: "INV005", status: "Paid", amount: "$550.00", method: "PayPal" },
]

function ShadcnTableDemo() {
  return (
    <ShadcnTable>
      <ShadcnTableHeader>
        <ShadcnTableRow>
          <ShadcnTableHead className="w-[100px]">Invoice</ShadcnTableHead>
          <ShadcnTableHead>Status</ShadcnTableHead>
          <ShadcnTableHead>Method</ShadcnTableHead>
          <ShadcnTableHead className="text-right">Amount</ShadcnTableHead>
        </ShadcnTableRow>
      </ShadcnTableHeader>
      <ShadcnTableBody>
        {invoices.map((inv) => (
          <ShadcnTableRow key={inv.invoice}>
            <ShadcnTableCell className="font-medium">{inv.invoice}</ShadcnTableCell>
            <ShadcnTableCell>{inv.status}</ShadcnTableCell>
            <ShadcnTableCell>{inv.method}</ShadcnTableCell>
            <ShadcnTableCell className="text-right">{inv.amount}</ShadcnTableCell>
          </ShadcnTableRow>
        ))}
      </ShadcnTableBody>
    </ShadcnTable>
  )
}

export { ShadcnTableDemo }
