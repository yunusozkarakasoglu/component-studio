/**
 * TableSelection
 * Satır seçimi örneği — checkbox'lar (saf React).
 * @id 523
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { useState } from "react"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const DATA = [
  { id: "1", name: "Kate Moore", role: "CEO", email: "kate@acme.com" },
  { id: "2", name: "John Smith", role: "CTO", email: "john@acme.com" },
  { id: "3", name: "Sara Johnson", role: "CMO", email: "sara@acme.com" },
  { id: "4", name: "Michael Brown", role: "CFO", email: "michael@acme.com" },
]

function TableSelection() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allSelected = DATA.length > 0 && selected.size === DATA.length

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(DATA.map((d) => d.id)))
  }

  return (
    <div className="flex flex-col gap-3">
      <Table>
        <TableScrollContainer>
          <TableContent aria-label="Team members" className="min-w-[560px]">
            <TableHeader>
              <TableColumn className="w-10">
                <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Select all" />
              </TableColumn>
              <TableColumn isRowHeader>Name</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>Email</TableColumn>
            </TableHeader>
            <TableBody>
              {DATA.map((row) => (
                <TableRow key={row.id} className={selected.has(row.id) ? "bg-blue-500/5" : undefined}>
                  <TableCell className="w-10">
                    <input type="checkbox" checked={selected.has(row.id)} onChange={() => toggle(row.id)} aria-label={`Select ${row.name}`} />
                  </TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableContent>
        </TableScrollContainer>
      </Table>
      <p className="text-sm text-muted-foreground">
        {selected.size} row(s) selected {selected.size > 0 && `(${[...selected].join(", ")})`}
      </p>
    </div>
  )
}

export { TableSelection }
