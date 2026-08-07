/**
 * MtMenubar familyası
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Menü çubuğu — MtMenubar + MtMenubarMenu + Trigger + Dropdown + Item.
 *   <MtMenubar>
 *     <MtMenubarMenu>
 *       <MtMenubarTrigger>File</MtMenubarTrigger>
 *       <MtMenubarDropdown>
 *         <MtMenubarItem>New</MtMenubarItem>
 *       </MtMenubarDropdown>
 *     </MtMenubarMenu>
 *   </MtMenubar>
 * @id 1082
 * @category Butonlar & Aksiyonlar
 * @subcategory MtMenubar
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

interface MenubarContextValue {
  openMenu: string | null
  setOpenMenu: (id: string | null) => void
}

const MenubarContext = createContext<MenubarContextValue | null>(null)

function useMtMenubar(): MenubarContextValue {
  const ctx = useContext(MenubarContext)
  if (!ctx) throw new Error("MtMenubar parçaları, MtMenubar içinde kullanılmalı")
  return ctx
}

interface MtMenubarProps extends HTMLAttributes<HTMLDivElement> {}

function MtMenubar({ className, children, ...props }: MtMenubarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  return (
    <MenubarContext.Provider value={{ openMenu, setOpenMenu }}>
      <div
        role="menubar"
        data-slot="mt-menubar"
        onMouseLeave={() => setOpenMenu(null)}
        className={cn("flex items-center gap-0.5 rounded-md border border-border bg-background p-0.5 shadow-xs", className)}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  )
}

interface MtMenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
}

function MtMenubarMenu({ className, id, ...props }: MtMenubarMenuProps) {
  return <div data-slot="mt-menubar-menu" data-id={id} className={cn("relative", className)} {...props} />
}

interface MtMenubarTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  id: string
}

function MtMenubarTrigger({ className, id, children, ...props }: MtMenubarTriggerProps) {
  const ctx = useMtMenubar()
  const open = ctx.openMenu === id
  return (
    <button
      type="button"
      role="menuitem"
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      data-slot="mt-menubar-trigger"
      onClick={() => ctx.setOpenMenu(open ? null : id)}
      onMouseEnter={() => ctx.setOpenMenu(id)}
      className={cn(
        "inline-flex h-7 cursor-pointer items-center gap-1 rounded px-2.5 text-sm font-medium text-foreground/80 transition-colors outline-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        "data-[state=open]:bg-muted data-[state=open]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-3 text-muted-foreground" />
    </button>
  )
}

interface MtMenubarDropdownProps extends HTMLAttributes<HTMLDivElement> {
  id: string
}

function MtMenubarDropdown({ className, id, children, ...props }: MtMenubarDropdownProps) {
  const ctx = useMtMenubar()
  if (ctx.openMenu !== id) return null
  return (
    <div
      role="menu"
      data-slot="mt-menubar-dropdown"
      onMouseEnter={() => ctx.setOpenMenu(id)}
      className={cn(
        "absolute left-0 top-full z-50 mt-0.5 min-w-[12rem] rounded-md border border-border bg-background p-1 text-foreground shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface MtMenubarItemProps extends HTMLAttributes<HTMLButtonElement> {}

function MtMenubarItem({ className, children, ...props }: MtMenubarItemProps) {
  const ctx = useMtMenubar()
  return (
    <button
      type="button"
      role="menuitem"
      data-slot="mt-menubar-item"
      onClick={() => ctx.setOpenMenu(null)}
      className={cn(
        "flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm transition-colors outline-none select-none",
        "hover:bg-muted focus-visible:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { MtMenubar, MtMenubarDropdown, MtMenubarItem, MtMenubarMenu, MtMenubarTrigger }
export type { MtMenubarDropdownProps, MtMenubarItemProps, MtMenubarMenuProps, MtMenubarProps, MtMenubarTriggerProps }
