/**
 * ShadcnKbd + ShadcnKbdGroup
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Klavye tuşu görüntüleyici + tuş grubu.
 *   <ShadcnKbdGroup><ShadcnKbd>⌘</ShadcnKbd><ShadcnKbd>K</ShadcnKbd></ShadcnKbdGroup>
 * @id 643
 * @category Genel
 * @subcategory ShadcnKbd
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnKbdProps extends HTMLAttributes<HTMLElement> {}

function ShadcnKbd({ className, ...props }: ShadcnKbdProps) {
  return (
    <kbd
      data-slot="shadcn-kbd"
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-foreground",
        "data-[icon=inline-start]:mr-1.5 data-[icon=inline-end]:ml-1.5",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnKbdGroupProps extends HTMLAttributes<HTMLElement> {}

function ShadcnKbdGroup({ className, ...props }: ShadcnKbdGroupProps) {
  return <span data-slot="shadcn-kbd-group" className={cn("inline-flex gap-0.5", className)} {...props} />
}

export { ShadcnKbd, ShadcnKbdGroup }
export type { ShadcnKbdGroupProps, ShadcnKbdProps }
