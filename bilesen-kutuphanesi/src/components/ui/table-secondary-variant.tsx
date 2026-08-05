/**
 * TableSecondaryVariant
 * Secondary variant örneği (saf React).
 * @id 521
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const ROWS = [
  ["Kate Moore", "CEO", "Active", "kate@acme.com"],
  ["John Smith", "CTO", "Active", "john@acme.com"],
  ["Sara Johnson", "CMO", "On Leave", "sara@acme.com"],
  ["Michael Brown", "CFO", "Active", "michael@acme.com"],
] as const

function TableSecondaryVariant() {
  return (
    <Table variant="secondary">
      <TableScrollContainer>
        <TableContent aria-label="Team members" className="min-w-[600px]">
          <TableHeader>
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row[0]}>
                <TableCell className="font-medium">{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableSecondaryVariant }
