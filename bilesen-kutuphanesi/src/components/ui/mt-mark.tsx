/**
 * MtMark
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kalem vurgusu — renkli altı çizgili metin.
 *   <MtMark>vurgulu metin</MtMark>
 * @id 1516
 * @category Alert & Dialog
 * @subcategory MtMark
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtMarkProps {
  color?: string
  children?: ReactNode
  className?: string
}

const markColors: Record<string, string> = {
  yellow: "bg-yellow-200 text-yellow-900", blue: "bg-blue-200 text-blue-900",
  green: "bg-green-200 text-green-900", red: "bg-red-200 text-red-900",
  teal: "bg-teal-200 text-teal-900", gray: "bg-gray-200 text-gray-900",
}

function MtMark({ color = "yellow", children, className }: MtMarkProps) {
  return (
    <mark data-slot="mt-mark" className={cn("rounded px-1", markColors[color] ?? markColors.yellow, className)}>
      {children}
    </mark>
  )
}

export { MtMark }
export type { MtMarkProps }
