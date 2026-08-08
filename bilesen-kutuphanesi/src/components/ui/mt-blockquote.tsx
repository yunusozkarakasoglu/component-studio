/**
 * MtBlockquote
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Alıntı — cite, icon, color.
 *   <MtBlockquote cite="– Forrest Gump">…</MtBlockquote>
 * @id 1512
 * @category Alert & Dialog
 * @subcategory MtBlockquote
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtBlockquoteProps {
  cite?: ReactNode
  icon?: ReactNode
  color?: string
  children?: ReactNode
  className?: string
}

const borderColors: Record<string, string> = {
  blue: "border-l-blue-600", red: "border-l-red-600", green: "border-l-green-600",
  teal: "border-l-teal-600", gray: "border-l-gray-500", yellow: "border-l-yellow-500",
}
const iconColors: Record<string, string> = {
  blue: "text-blue-600", red: "text-red-600", green: "text-green-600",
  teal: "text-teal-600", gray: "text-gray-500", yellow: "text-yellow-600",
}

function MtBlockquote({ cite, icon, color = "blue", children, className }: MtBlockquoteProps) {
  return (
    <blockquote
      data-slot="mt-blockquote"
      className={cn("border-l-2 pl-4 text-sm leading-relaxed", borderColors[color] ?? borderColors.blue, className)}
    >
      <span className="flex items-start gap-2">
        {icon && <span className={cn("mt-0.5 shrink-0", iconColors[color] ?? iconColors.blue)}>{icon}</span>}
        <span>
          {children}
          {cite && <cite className="mt-2 block text-xs not-italic text-muted-foreground">{cite}</cite>}
        </span>
      </span>
    </blockquote>
  )
}

export { MtBlockquote }
export type { MtBlockquoteProps }
