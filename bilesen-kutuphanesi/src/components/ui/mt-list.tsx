/**
 * MtList + MtListItem
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Liste — sıralı/sırasız, ikon, nested, reversed, start.
 *   <MtList icon={<Check/>}>
 *     <MtListItem>Item</MtListItem>
 *   </MtList>
 * @id 1431
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtListProps extends HTMLAttributes<HTMLUListElement> {
  type?: "unordered" | "ordered"
  withPadding?: boolean
  center?: boolean
  icon?: ReactNode
  spacing?: "xs" | "sm" | "md" | "lg" | "xl"
  start?: number
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const spacings: Record<string, string> = { xs: "gap-1", sm: "gap-1.5", md: "gap-2", lg: "gap-3", xl: "gap-4" }
const sizes: Record<string, string> = { xs: "text-xs", sm: "text-sm", md: "text-sm", lg: "text-base", xl: "text-lg" }

function MtList({ className, type = "unordered", withPadding, center, icon, spacing = "md", start = 1, size = "md", children, ...props }: MtListProps) {
  const Tag = type === "ordered" ? "ol" : "ul"

  return (
    <Tag
      data-slot="mt-list"
      className={cn(
        "flex flex-col list-none p-0",
        spacings[spacing],
        sizes[size],
        withPadding && "pl-5",
        className
      )}
      {...(type === "ordered" ? { start } : {})}
      {...props}
    >
      {children}
    </Tag>
  )
}

interface MtListItemProps extends HTMLAttributes<HTMLLIElement> {
  icon?: ReactNode
}

function MtListItem({ className, icon, children, ...props }: MtListItemProps) {
  return (
    <li data-slot="mt-list-item" className={cn("flex items-start gap-2", className)} {...props}>
      {icon ? (
        <span className="mt-0.5 flex shrink-0 items-center justify-center text-current">{icon}</span>
      ) : (
        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-current opacity-60" />
      )}
      <span className="min-w-0">{children}</span>
    </li>
  )
}

export { MtList, MtListItem }
export type { MtListItemProps, MtListProps }
