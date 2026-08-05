/**
 * TableColumnResizing
 * Sütun genişliği sürükleme örneği (saf React).
 * @id 526
 * @category Veri Gösterimi
 * @subcategory Table
 */
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableRow, TableScrollContainer } from "@/components/ui/table"

const ROWS = [
  { name: "Kate Moore", role: "CEO", email: "kate@acme.com" },
  { name: "John Smith", role: "CTO", email: "john@acme.com" },
  { name: "Sara Johnson", role: "CMO", email: "sara@acme.com" },
]

function TableColumnResizing() {
  const [widths, setWidths] = useState<Record<string, number>>({ name: 180, role: 120, email: 200 })
  const dragging = useRef<{ key: string; startX: number; startWidth: number } | null>(null)

  const startResize = (key: string, e: ReactPointerEvent) => {
    e.preventDefault()
    dragging.current = { key, startX: e.clientX, startWidth: widths[key] }
    const onMove = (ev: globalThis.PointerEvent) => {
      if (!dragging.current) return
      const { key: k, startX, startWidth } = dragging.current
      setWidths((prev) => ({ ...prev, [k]: Math.max(80, startWidth + ev.clientX - startX) }))
    }
    const onUp = () => {
      dragging.current = null
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
  }

  return (
    <Table>
      <TableScrollContainer>
        <TableContent aria-label="Team" className="min-w-[500px]">
          <TableHeader>
            <TableColumn isRowHeader style={{ width: widths.name }}>
              Name
              <ResizeHandle onPointerDown={(e) => startResize("name", e)} />
            </TableColumn>
            <TableColumn style={{ width: widths.role }}>
              Role
              <ResizeHandle onPointerDown={(e) => startResize("role", e)} />
            </TableColumn>
            <TableColumn style={{ width: widths.email }}>Email</TableColumn>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
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

function ResizeHandle({ onPointerDown }: { onPointerDown: (e: ReactPointerEvent) => void }) {
  return (
    <span
      aria-hidden="true"
      onPointerDown={onPointerDown}
      className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-transparent hover:bg-blue-500/50"
    />
  )
}

export { TableColumnResizing }
