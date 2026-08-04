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
}

function ListBoxItem({ className, children, ...props }: ListBoxItemProps) {
  return (
    <li data-slot="listbox-item" className={cn("flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-sm transition-colors hover:bg-muted", className)} {...props}>
      {children}
    </li>
  )
}

function ListBoxSection({ className, children }: ListBoxProps) {
  return <li data-slot="listbox-section" className={cn("not-last:border-b not-last:border-border", className)}>{children}</li>
}

function ListBoxItemIndicator({ className }: { className?: string }) {
  return <span data-slot="listbox-item-indicator" className={cn("size-4 rounded-full border border-border", className)} aria-hidden="true" />
}

export { ListBox, ListBoxItem, ListBoxItemIndicator, ListBoxSection }
