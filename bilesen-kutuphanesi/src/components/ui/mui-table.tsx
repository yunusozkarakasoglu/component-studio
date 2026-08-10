/**
 * MuiTable
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Veri tablosu — başlık + satırlar.
 *   <MuiTable columns={[{key,label}]} rows={[{key: value}]} />
 * columns: {key, label, align?}[] · rows: nesne dizisi
 * dense · stickyHeader · striped (zebra)
 * @id 2012
 * @category Veri Gösterimi
 * @subcategory MuiTable
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiTableColumn {
  key: string
  label: ReactNode
  align?: "left" | "center" | "right"
}

interface MuiTableProps {
  columns?: MuiTableColumn[]
  rows?: Record<string, ReactNode>[]
  dense?: boolean
  striped?: boolean
  className?: string
}

function MuiTable({ columns = [], rows = [], dense = false, striped = false, className }: MuiTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg border border-gray-200", className)}>
      <table className="w-full border-collapse bg-white text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-xs uppercase text-gray-500">
            {columns.map((c) => (
              <th key={c.key} className={cn("px-3 font-semibold", dense ? "py-1.5" : "py-2.5", c.align === "right" && "text-right", c.align === "center" && "text-center")}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={cn("border-b border-gray-100 last:border-0", striped && i % 2 === 1 && "bg-gray-50")}>
              {columns.map((c) => (
                <td key={c.key} className={cn("px-3 text-gray-800", dense ? "py-1.5" : "py-2.5", c.align === "right" && "text-right", c.align === "center" && "text-center")}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { MuiTable }
export type { MuiTableProps, MuiTableColumn }
