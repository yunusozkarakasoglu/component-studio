/**
 * ShadcnCheckboxInTable
 * Tabloda seçim — tümünü seç + satır seçimi (saf React, shadcn kaynaklı).
 * Table: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 707
 * @category Checkbox
 * @subcategory ShadcnCheckbox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCheckbox } from "@/components/ui/shadcn-checkbox"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@/components/ui/table"

const tableData = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "2", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "3", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "4", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

function ShadcnCheckboxInTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set(["1"]))
  const selectAll = selectedRows.size === tableData.length

  return (
    <Table aria-label="Users">
      <TableHeader>
        <TableRow>
          <TableColumn className="w-8">
            <ShadcnCheckbox
              id="shadcn-select-all-checkbox"
              name="select-all-checkbox"
              checked={selectAll}
              onCheckedChange={(checked) =>
                setSelectedRows(checked ? new Set(tableData.map((r) => r.id)) : new Set())
              }
            />
          </TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Role</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow key={row.id} data-state={selectedRows.has(row.id) ? "selected" : undefined}>
            <TableCell>
              <ShadcnCheckbox
                id={`shadcn-row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                checked={selectedRows.has(row.id)}
                onCheckedChange={(checked) => {
                  const next = new Set(selectedRows)
                  if (checked) next.add(row.id)
                  else next.delete(row.id)
                  setSelectedRows(next)
                }}
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { ShadcnCheckboxInTable }
