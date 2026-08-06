/**
 * ShadcnSidebar familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Yan navigasyon paneli — Provider + Sidebar + Header/Content/Footer +
 * Group + Menu/Item/Button + Trigger (daralt) + Inset + useSidebar.
 *   <ShadcnSidebarProvider>
 *     <ShadcnSidebar>…</ShadcnSidebar>
 *     <ShadcnSidebarInset>…</ShadcnSidebarInset>
 *   </ShadcnSidebarProvider>
 * @id 831
 * @category Overlay
 * @subcategory ShadcnSidebar
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { PanelLeft } from "@/components/ui/icons"

interface SidebarContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

function useShadcnSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error("ShadcnSidebar parçaları, ShadcnSidebarProvider içinde kullanılmalı")
  return ctx
}

interface ShadcnSidebarProviderProps {
  children?: ReactNode
  defaultOpen?: boolean
}

function ShadcnSidebarProvider({ children, defaultOpen = true }: ShadcnSidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div data-slot="shadcn-sidebar-provider" className="flex min-h-0 w-full">
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

interface ShadcnSidebarProps extends HTMLAttributes<HTMLElement> {}

function ShadcnSidebar({ className, children, ...props }: ShadcnSidebarProps) {
  const ctx = useShadcnSidebar()
  return (
    <aside
      data-slot="shadcn-sidebar"
      data-state={ctx.open ? "expanded" : "collapsed"}
      className={cn(
        "flex shrink-0 flex-col border-r border-border bg-background transition-[width] duration-200",
        ctx.open ? "w-60" : "w-14",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  )
}

interface ShadcnSidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSidebarHeader({ className, ...props }: ShadcnSidebarHeaderProps) {
  return <div data-slot="shadcn-sidebar-header" className={cn("flex h-12 items-center border-b border-border px-3", className)} {...props} />
}

interface ShadcnSidebarContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSidebarContent({ className, ...props }: ShadcnSidebarContentProps) {
  return <div data-slot="shadcn-sidebar-content" className={cn("flex-1 overflow-y-auto p-2", className)} {...props} />
}

interface ShadcnSidebarFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSidebarFooter({ className, ...props }: ShadcnSidebarFooterProps) {
  return <div data-slot="shadcn-sidebar-footer" className={cn("border-t border-border p-2", className)} {...props} />
}

interface ShadcnSidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

function ShadcnSidebarGroup({ className, title, children, ...props }: ShadcnSidebarGroupProps) {
  const ctx = useShadcnSidebar()
  return (
    <div data-slot="shadcn-sidebar-group" className={cn("mb-3", className)} {...props}>
      {title && (
        <div className={cn("px-2 pb-1 text-xs font-medium text-muted-foreground", !ctx.open && "sr-only")}>{title}</div>
      )}
      {children}
    </div>
  )
}

interface ShadcnSidebarMenuProps extends HTMLAttributes<HTMLUListElement> {}

function ShadcnSidebarMenu({ className, ...props }: ShadcnSidebarMenuProps) {
  return <ul data-slot="shadcn-sidebar-menu" className={cn("flex flex-col gap-0.5", className)} {...props} />
}

interface ShadcnSidebarMenuItemProps extends HTMLAttributes<HTMLLIElement> {}

function ShadcnSidebarMenuItem({ className, ...props }: ShadcnSidebarMenuItemProps) {
  return <li data-slot="shadcn-sidebar-menu-item" className={className} {...props} />
}

interface ShadcnSidebarMenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
}

function ShadcnSidebarMenuButton({ className, isActive, children, ...props }: ShadcnSidebarMenuButtonProps) {
  const ctx = useShadcnSidebar()
  return (
    <button
      type="button"
      data-slot="shadcn-sidebar-menu-button"
      data-active={isActive ? "true" : undefined}
      title={!ctx.open && typeof children === "string" ? (children as string) : undefined}
      className={cn(
        "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-foreground/80 transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
        "data-[active=true]:bg-muted data-[active=true]:text-foreground",
        !ctx.open && "justify-center px-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnSidebarTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnSidebarTrigger({ className, ...props }: ShadcnSidebarTriggerProps) {
  const ctx = useShadcnSidebar()
  return (
    <button
      type="button"
      aria-label="Toggle sidebar"
      data-slot="shadcn-sidebar-trigger"
      onClick={() => ctx.setOpen(!ctx.open)}
      className={cn(
        "inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    >
      <PanelLeft className="size-4" />
    </button>
  )
}

interface ShadcnSidebarInsetProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnSidebarInset({ className, ...props }: ShadcnSidebarInsetProps) {
  return <div data-slot="shadcn-sidebar-inset" className={cn("flex flex-1 flex-col", className)} {...props} />
}

export {
  ShadcnSidebar,
  ShadcnSidebarContent,
  ShadcnSidebarFooter,
  ShadcnSidebarGroup,
  ShadcnSidebarHeader,
  ShadcnSidebarInset,
  ShadcnSidebarMenu,
  ShadcnSidebarMenuButton,
  ShadcnSidebarMenuItem,
  ShadcnSidebarProvider,
  ShadcnSidebarTrigger,
  useShadcnSidebar,
}
export type {
  ShadcnSidebarContentProps,
  ShadcnSidebarFooterProps,
  ShadcnSidebarGroupProps,
  ShadcnSidebarHeaderProps,
  ShadcnSidebarInsetProps,
  ShadcnSidebarMenuButtonProps,
  ShadcnSidebarMenuItemProps,
  ShadcnSidebarMenuProps,
  ShadcnSidebarProps,
  ShadcnSidebarProviderProps,
  ShadcnSidebarTriggerProps,
}
