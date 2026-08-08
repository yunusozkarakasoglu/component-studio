/**
 * MtHighlight
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Vurgulu metin — highlight dizisiyle eşleşen kelimeleri işaretler.
 *   <MtHighlight highlight={["cat"]}>A cat in a hat</MtHighlight>
 * @id 1515
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtHighlightProps {
  highlight?: string | string[]
  color?: string
  children?: ReactNode
  className?: string
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function MtHighlight({ highlight = "", color = "yellow", children, className }: MtHighlightProps) {
  const terms = Array.isArray(highlight) ? highlight.filter(Boolean) : [highlight]
  const text = String(children ?? "")
  if (terms.length === 0 || !text) return <span className={className}>{text}</span>

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi")
  const parts = text.split(pattern)

  const hlClass =
    color === "yellow" ? "bg-yellow-200/70 text-foreground" :
    color === "blue" ? "bg-blue-200/70 text-blue-900" :
    color === "green" ? "bg-green-200/70 text-green-900" :
    color === "red" ? "bg-red-200/70 text-red-900" : "bg-yellow-200/70"

  return (
    <span data-slot="mt-highlight" className={cn("text-sm", className)}>
      {parts.map((part, i) =>
        pattern.test(part) ? (
          <mark key={i} className={cn("rounded px-0.5", hlClass)}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  )
}

export { MtHighlight }
export type { MtHighlightProps }
