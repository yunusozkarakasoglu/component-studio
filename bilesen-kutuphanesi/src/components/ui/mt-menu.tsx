/**
 * MtMenu familyası
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Açılır menü — MtMenu + Target + Dropdown + Item + Label + Divider.
 *   <MtMenu>
 *     <MtMenuTarget><MtButton>Toggle</MtButton></MtMenuTarget>
 *     <MtMenuDropdown>
 *       <MtMenuLabel>Label</MtMenuLabel>
 *       <MtMenuItem>Item 1</MtMenuItem>
 *       <MtMenuDivider />
 *       <MtMenuItem variant="danger">Delete</MtMenuItem>
 *     </MtMenuDropdown>
 *   </MtMenu>
 * @id 1081
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenu
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MenuContextValue {
  open: boolean
  setOpen: (v: boolean) => void
}

const MenuContext = createContext<MenuContextValue | null>(null)

function useMtMenu(): MenuContextValue {
  const ctx = useContext(MenuContext)
  if (!ctx) throw new Error("MtMenu parçaları, MtMenu içinde kullanılmalı")
  return ctx
}

interface MtMenuProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
}

function MtMenu({ className, defaultOpen, children, ...props }: MtMenuProps) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div data-slot="mt-menu" className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </MenuContext.Provider>
  )
}

interface MtMenuTargetProps extends HTMLAttributes<HTMLDivElement> {}

function MtMenuTarget({ className, children, ...props }: MtMenuTargetProps) {
  const ctx = useMtMenu()
  return (
    <div
      data-slot="mt-menu-target"
      className={className}
      onClick={(e) => {
        e.stopPropagation()
        ctx.setOpen(!ctx.open)
      }}
      {...props}
    >
      {children}
    </div>
  )
}

interface MtMenuDropdownProps extends HTMLAttributes<HTMLDivElement> {}

function MtMenuDropdown({ className, children, ...props }: MtMenuDropdownProps) {
  const ctx = useMtMenu()
  if (!ctx.open) return null
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => ctx.setOpen(false)} />
      <div
        role="menu"
        data-slot="mt-menu-dropdown"
        className={cn(
          "absolute left-0 top-full z-50 mt-1.5 min-w-[12rem] rounded-md border border-border bg-background p-1 text-foreground shadow-lg",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

interface MtMenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "danger"
  isDisabled?: boolean
  leftSection?: ReactNode
}

function MtMenuItem({ className, variant = "default", isDisabled, leftSection, children, onClick, ...props }: MtMenuItemProps) {
  const ctx = useMtMenu()
  return (
    <button
      type="button"
      role="menuitem"
      data-slot="mt-menu-item"
      disabled={isDisabled}
      onClick={(e) => {
        ctx.setOpen(false)
        onClick?.(e)
      }}
      className={cn(
        "flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors outline-none select-none",
        "hover:bg-muted focus-visible:bg-muted",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "danger" && "text-red-600 hover:bg-red-50",
        className
      )}
      {...props}
    >
      {leftSection && <span className="flex shrink-0 items-center">{leftSection}</span>}
      {children}
    </button>
  )
}

interface MtMenuLabelProps extends HTMLAttributes<HTMLDivElement> {}

function MtMenuLabel({ className, ...props }: MtMenuLabelProps) {
  return <div data-slot="mt-menu-label" className={cn("px-2.5 pt-1.5 pb-1 text-xs font-medium text-muted-foreground", className)} {...props} />
}

interface MtMenuDividerProps extends HTMLAttributes<HTMLDivElement> {}

function MtMenuDivider({ className, ...props }: MtMenuDividerProps) {
  return <div role="separator" data-slot="mt-menu-divider" className={cn("mx-1 my-1 h-px bg-border", className)} {...props} />
}

export { MtMenu, MtMenuDivider, MtMenuDropdown, MtMenuItem, MtMenuLabel, MtMenuTarget }
export type { MtMenuDividerProps, MtMenuDropdownProps, MtMenuItemProps, MtMenuLabelProps, MtMenuProps, MtMenuTargetProps }
