/**
 * TableExpandableRows
 * Genişleyen satır örneği (saf React).
 * @id 524
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { useState } from "react"
import { ChevronDown } from "@/components/ui/icons"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const DATA = [
  { id: "1", name: "Kate Moore", role: "CEO", email: "kate@acme.com", details: "Leading Acme since 2021. Previously VP of Product at Beta Inc." },
  { id: "2", name: "John Smith", role: "CTO", email: "john@acme.com", details: "Architect of the Acme platform. 15 years in distributed systems." },
  { id: "3", name: "Sara Johnson", role: "CMO", email: "sara@acme.com", details: "Growth and brand strategy. Previously at Gamma Agency." },
]

function TableExpandableRows() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Team members" className="min-w-[560px]">
          <TableHeader>
            <TableColumn className="w-10" />
            <TableColumn isRowHeader>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="w-10">
                  <button
                    type="button"
                    aria-label={expanded.has(row.id) ? "Collapse" : "Expand"}
                    onClick={() => toggle(row.id)}
                    className="inline-flex size-6 items-center justify-center rounded-md hover:bg-muted"
                  >
                    <ChevronDown className={`size-4 transition-transform ${expanded.has(row.id) ? "rotate-180" : ""}`} />
                  </button>
                </TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
            {expanded.size > 0 &&
              DATA.filter((r) => expanded.has(r.id)).map((row) => (
                <TableRow key={`detail-${row.id}`} className="bg-muted/30">
                  <TableCell colSpan={4} className="whitespace-normal py-3 text-sm text-muted-foreground">
                    {row.details}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableContent>
      </TableScrollContainer>
    </Table>
  )
}

export { TableExpandableRows }
