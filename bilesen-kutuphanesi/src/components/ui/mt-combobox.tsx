/**
 * MtCombobox
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Açılır kombobox — Target + Dropdown yapısı.
 *   <MtCombobox>
 *     <MtComboboxTarget><MtButton>Open</MtButton></MtComboboxTarget>
 *     <MtComboboxDropdown>…</MtComboboxDropdown>
 *   </MtCombobox>
 * @id 1303
 * @category Combobox
 * @subcategory MtCombobox
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ComboboxContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}

const ComboboxContext = createContext<ComboboxContextValue | null>(null)

interface MtComboboxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

function MtCombobox({ className, children, ...props }: MtComboboxProps) {
  const [open, setOpen] = useState(false)
  return (
    <ComboboxContext.Provider value={{ open, setOpen }}>
      <div data-slot="mt-combobox" className={cn("relative", className)} {...props}>
        {children}
      </div>
    </ComboboxContext.Provider>
  )
}

interface MtComboboxTargetProps extends HTMLAttributes<HTMLDivElement> {}

function MtComboboxTarget({ className, children, onClick, ...props }: MtComboboxTargetProps) {
  const ctx = useContext(ComboboxContext)!
  return (
    <div
      className={className}
      onClick={(e) => {
        ctx.setOpen(!ctx.open)
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </div>
  )
}

interface MtComboboxDropdownProps extends HTMLAttributes<HTMLDivElement> {}

function MtComboboxDropdown({ className, children, ...props }: MtComboboxDropdownProps) {
  const ctx = useContext(ComboboxContext)!
  if (!ctx.open) return null
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => ctx.setOpen(false)} />
      <div data-slot="mt-combobox-dropdown" className={cn("absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-background p-1 shadow-lg", className)} {...props}>
        {children}
      </div>
    </>
  )
}

interface MtComboboxOptionProps extends HTMLAttributes<HTMLButtonElement> {
  onSelect?: () => void
}

function MtComboboxOption({ className, onSelect, children, ...props }: MtComboboxOptionProps) {
  const ctx = useContext(ComboboxContext)!
  return (
    <button
      type="button"
      onClick={() => {
        onSelect?.()
        ctx.setOpen(false)
      }}
      className={cn("flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-muted", className)}
      {...props}
    >
      {children}
    </button>
  )
}

export { MtCombobox, MtComboboxDropdown, MtComboboxOption, MtComboboxTarget }
export type { MtComboboxDropdownProps, MtComboboxOptionProps, MtComboboxProps, MtComboboxTargetProps }
