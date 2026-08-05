/**
 * TableCustomStyles
 * Özelleştirilmiş tablo örneği (saf React).
 * @id 529
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const ROWS = [
  ["Kate Moore", "CEO", "kate@acme.com"],
  ["John Smith", "CTO", "john@acme.com"],
  ["Sara Johnson", "CMO", "sara@acme.com"],
] as const

function TableCustomStyles() {
  return (
    <Table className="overflow-hidden rounded-xl border border-border shadow-sm">
      <TableScrollContainer>
        <TableContent aria-label="Team" className="min-w-[480px]">
          <TableHeader className="bg-muted/60">
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row[0]} className="odd:bg-background even:bg-muted/20 hover:bg-blue-500/5">
                <TableCell className="font-medium text-blue-700">{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell className="font-mono text-xs">{row[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableCustomStyles }
