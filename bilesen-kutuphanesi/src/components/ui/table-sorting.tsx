/**
 * TableSorting
 * Sıralama örneği (saf React).
 * @id 522
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { useState } from "react"
import { ChevronDown, ChevronUp } from "@/components/ui/icons"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const DATA = [
  { name: "Kate Moore", role: "CEO", email: "kate@acme.com" },
  { name: "John Smith", role: "CTO", email: "john@acme.com" },
  { name: "Sara Johnson", role: "CMO", email: "sara@acme.com" },
  { name: "Michael Brown", role: "CFO", email: "michael@acme.com" },
]

type SortKey = "name" | "role"

function TableSorting() {
  const [sortKey, setSortKey] = useState<SortKey>("name")
  const [direction, setDirection] = useState<"asc" | "desc">("asc")

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setDirection((d) => (d === "asc" ? "desc" : "asc"))
    else {
      setSortKey(key)
      setDirection("asc")
    }
  }

  const sorted = [...DATA].sort((a, b) => {
    const cmp = a[sortKey].localeCompare(b[sortKey])
    return direction === "asc" ? cmp : -cmp
  })

  const Arrow = ({ active }: { active: boolean }) =>
    active ? (direction === "asc" ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />) : null

  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Team members" className="min-w-[500px]">
          <TableHeader>
            <TableColumn isRowHeader>
              <button type="button" className="flex items-center gap-1 uppercase" onClick={() => toggleSort("name")}>
                Name <Arrow active={sortKey === "name"} />
              </button>
            </TableColumn>
            <TableColumn>
              <button type="button" className="flex items-center gap-1 uppercase" onClick={() => toggleSort("role")}>
                Role <Arrow active={sortKey === "role"} />
              </button>
            </TableColumn>
            <TableColumn>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableSorting }
