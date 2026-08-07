/**
 * ListBox
 * Seçenek listesi — ListBox + Item + Section (saf React).
 * @id 138
 * @category Form Elemanları
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ListBoxProps {
  className?: string
  children?: ReactNode
}

function ListBox({ className, children }: ListBoxProps) {
  return <ul data-slot="listbox" className={cn("divide-y divide-border rounded-lg border border-border", className)}>{children}</ul>
}

interface ListBoxItemProps {
  id?: string
  textValue?: string
  className?: string
  children?: ReactNode
  isDisabled?: boolean
}

function ListBoxItem({ className, children, isDisabled, ...props }: ListBoxItemProps) {
  return (
    <li
      data-slot="listbox-item"
      data-disabled={isDisabled ? "true" : undefined}
      aria-disabled={isDisabled ? "true" : undefined}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-sm transition-colors hover:bg-muted",
        isDisabled && "pointer-events-none cursor-not-allowed opacity-50 hover:bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}

interface ListBoxSectionProps {
  className?: string
  children?: ReactNode
  title?: string
}

function ListBoxSection({ className, children, title }: ListBoxSectionProps) {
  return (
    <li data-slot="listbox-section" className={cn("not-last:border-b not-last:border-border", className)}>
      {title != null && (
        <div className="px-3 pt-2 pb-1 text-xs font-medium text-muted-foreground">{title}</div>
      )}
      {children}
    </li>
  )
}

function ListBoxItemIndicator({ className }: { className?: string }) {
  return <span data-slot="listbox-item-indicator" className={cn("size-4 rounded-full border border-border", className)} aria-hidden="true" />
}

export { ListBox, ListBoxItem, ListBoxItemIndicator, ListBoxSection }
