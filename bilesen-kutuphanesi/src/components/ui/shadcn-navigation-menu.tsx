/**
 * ShadcnNavigationMenu familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Açılır alt menülü navigasyon — Nav + List + Item + Trigger + Content + Link.
 *   <ShadcnNavigationMenu>
 *     <ShadcnNavigationMenuList>
 *       <ShadcnNavigationMenuItem>
 *         <ShadcnNavigationMenuTrigger>Learn</ShadcnNavigationMenuTrigger>
 *         <ShadcnNavigationMenuContent>…</ShadcnNavigationMenuContent>
 *       </ShadcnNavigationMenuItem>
 *     </ShadcnNavigationMenuList>
 *   </ShadcnNavigationMenu>
 * @id 854
 * @category Navigasyon
 * @subcategory ShadcnNavigationMenu
 * @source shadcn
 */
import { createContext, useContext, useState, type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "@/components/ui/icons"

interface NavigationMenuContextValue {
  openItem: string | null
  setOpenItem: (id: string | null) => void
}

const NavigationMenuContext = createContext<NavigationMenuContextValue | null>(null)

function useShadcnNavigationMenu(): NavigationMenuContextValue {
  const ctx = useContext(NavigationMenuContext)
  if (!ctx) throw new Error("ShadcnNavigationMenu parçaları, ShadcnNavigationMenu içinde kullanılmalı")
  return ctx
}

interface ShadcnNavigationMenuProps extends HTMLAttributes<HTMLElement> {}

function ShadcnNavigationMenu({ className, children, ...props }: ShadcnNavigationMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(null)
  return (
    <NavigationMenuContext.Provider value={{ openItem, setOpenItem }}>
      <nav data-slot="shadcn-navigation-menu" className={cn("relative", className)} onMouseLeave={() => setOpenItem(null)} {...props}>
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  )
}

interface ShadcnNavigationMenuListProps extends HTMLAttributes<HTMLUListElement> {}

function ShadcnNavigationMenuList({ className, ...props }: ShadcnNavigationMenuListProps) {
  return <ul data-slot="shadcn-navigation-menu-list" className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)} {...props} />
}

interface ShadcnNavigationMenuItemProps extends HTMLAttributes<HTMLLIElement> {
  id?: string
}

function ShadcnNavigationMenuItem({ className, id, ...props }: ShadcnNavigationMenuItemProps) {
  return <li data-slot="shadcn-navigation-menu-item" data-id={id} className={cn("relative", className)} {...props} />
}

interface ShadcnNavigationMenuTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  id: string
}

function ShadcnNavigationMenuTrigger({ className, id, children, ...props }: ShadcnNavigationMenuTriggerProps) {
  const ctx = useShadcnNavigationMenu()
  const open = ctx.openItem === id
  return (
    <button
      type="button"
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      data-slot="shadcn-navigation-menu-trigger"
      onMouseEnter={() => ctx.setOpenItem(id)}
      onClick={() => ctx.setOpenItem(open ? null : id)}
      className={cn(
        "inline-flex h-9 cursor-pointer items-center justify-center gap-1 rounded-md px-3 text-sm font-medium text-foreground/80 transition-colors outline-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        "data-[state=open]:bg-muted data-[state=open]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-3.5 transition-transform data-[state=open]:rotate-180" data-state={open ? "open" : "closed"} />
    </button>
  )
}

interface ShadcnNavigationMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  id: string
}

function ShadcnNavigationMenuContent({ className, id, children, ...props }: ShadcnNavigationMenuContentProps) {
  const ctx = useShadcnNavigationMenu()
  if (ctx.openItem !== id) return null
  return (
    <div
      data-slot="shadcn-navigation-menu-content"
      onMouseEnter={() => ctx.setOpenItem(id)}
      className={cn(
        "absolute left-0 top-full z-50 mt-1 w-max min-w-[16rem] rounded-lg border border-border bg-background p-2 text-foreground shadow-lg outline-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnNavigationMenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function ShadcnNavigationMenuLink({ className, children, ...props }: ShadcnNavigationMenuLinkProps) {
  return (
    <a
      data-slot="shadcn-navigation-menu-link"
      className={cn(
        "block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors outline-none select-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export {
  ShadcnNavigationMenu,
  ShadcnNavigationMenuContent,
  ShadcnNavigationMenuItem,
  ShadcnNavigationMenuLink,
  ShadcnNavigationMenuList,
  ShadcnNavigationMenuTrigger,
}
export type {
  ShadcnNavigationMenuContentProps,
  ShadcnNavigationMenuItemProps,
  ShadcnNavigationMenuLinkProps,
  ShadcnNavigationMenuListProps,
  ShadcnNavigationMenuProps,
  ShadcnNavigationMenuTriggerProps,
}
