/**
 * MtCode
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kod — satır içi veya blok, color.
 *   <MtCode block>const a = 1;</MtCode>
 * @id 1513
 * @category Alert & Dialog
 * @subcategory MtCode
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtCodeProps {
  block?: boolean
  color?: string
  children?: ReactNode
  className?: string
}

const colors: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700", red: "bg-red-50 text-red-700", green: "bg-green-50 text-green-700",
  yellow: "bg-yellow-50 text-yellow-800", gray: "bg-gray-100 text-gray-800",
}

function MtCode({ block, color = "gray", children, className }: MtCodeProps) {
  if (block) {
    return (
      <pre
        data-slot="mt-code"
        className={cn("overflow-x-auto rounded-lg border border-border bg-muted/50 p-3 font-mono text-xs leading-relaxed text-foreground", className)}
      >
        <code>{children}</code>
      </pre>
    )
  }
  return (
    <code data-slot="mt-code" className={cn("rounded px-1.5 py-0.5 font-mono text-[0.85em]", colors[color] ?? colors.gray, className)}>
      {children}
    </code>
  )
}

export { MtCode }
export type { MtCodeProps }
