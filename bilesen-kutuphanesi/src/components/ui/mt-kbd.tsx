/**
 * MtKbd
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Klavye tuşu — <MtKbd>Ctrl</MtKbd> + <MtKbd>K</MtKbd>
 * @id 1514
 * @category Alert & Dialog
 * @subcategory MtKbd
 * @source mantine
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtKbdProps {
  children?: ReactNode
  className?: string
}

function MtKbd({ children, className }: MtKbdProps) {
  return (
    <kbd
      data-slot="mt-kbd"
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-foreground shadow-[0_2px_0_rgba(0,0,0,0.05)]",
        className
      )}
    >
      {children}
    </kbd>
  )
}

export { MtKbd }
export type { MtKbdProps }
