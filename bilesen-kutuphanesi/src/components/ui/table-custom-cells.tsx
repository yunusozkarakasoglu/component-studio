/**
 * TableCustomCells
 * Özel hücre örneği — Chip'ler ve baş harfli avatarlar (saf React).
 * @id 528
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Chip, ChipLabel } from "@/components/ui/chip"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const ROWS = [
  { initials: "KM", name: "Kate Moore", role: "CEO", status: "Active" },
  { initials: "JS", name: "John Smith", role: "CTO", status: "Active" },
  { initials: "SJ", name: "Sara Johnson", role: "CMO", status: "On Leave" },
] as const

function TableCustomCells() {
  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Team" className="min-w-[480px]">
          <TableHeader>
            <TableColumn isRowHeader>Member</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <div className="flex items-center gap-2.5">
                    <Avatar size="sm">
                      <AvatarFallback>{row.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{row.name}</span>
                  </div>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Chip color={row.status === "Active" ? "success" : "warning"} size="sm" variant="soft">
                    <ChipLabel>{row.status}</ChipLabel>
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableCustomCells }
