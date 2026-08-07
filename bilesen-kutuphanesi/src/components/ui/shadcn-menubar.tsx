/**
 * ShadcnMenubar familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Menü çubuğu — Menubar + Menu + Trigger + Content + Item/Group/Separator/
 * Shortcut/CheckboxItem/RadioGroup/RadioItem/Sub.
 *   <ShadcnMenubar>
 *     <ShadcnMenubarMenu>
 *       <ShadcnMenubarTrigger>File</ShadcnMenubarTrigger>
 *       <ShadcnMenubarContent>
 *         <ShadcnMenubarItem>New Tab <ShadcnMenubarShortcut>⌘T</ShadcnMenubarShortcut></ShadcnMenubarItem>
 *       </ShadcnMenubarContent>
 *     </ShadcnMenubarMenu>
 *   </ShadcnMenubar>
 * @id 858
 * @category Navigasyon
 * @subcategory ShadcnMenubar
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check, ChevronRight } from "@/components/ui/icons"

interface MenubarContextValue {
  openMenu: string | null
  setOpenMenu: (id: string | null) => void
}

const MenubarContext = createContext<MenubarContextValue | null>(null)

function useShadcnMenubar(): MenubarContextValue {
  const ctx = useContext(MenubarContext)
  if (!ctx) throw new Error("ShadcnMenubar parçaları, ShadcnMenubar içinde kullanılmalı")
  return ctx
}

interface ShadcnMenubarProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubar({ className, children, ...props }: ShadcnMenubarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  return (
    <MenubarContext.Provider value={{ openMenu, setOpenMenu }}>
      <div
        role="menubar"
        data-slot="shadcn-menubar"
        onMouseLeave={() => setOpenMenu(null)}
        className={cn("flex h-9 items-center gap-1 rounded-md border border-border bg-background p-1 shadow-xs", className)}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  )
}

interface ShadcnMenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
}

function ShadcnMenubarMenu({ className, id, ...props }: ShadcnMenubarMenuProps) {
  return <div role="presentation" data-slot="shadcn-menubar-menu" data-id={id} className={cn("relative", className)} {...props} />
}

interface ShadcnMenubarTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  id: string
}

function ShadcnMenubarTrigger({ className, id, children, ...props }: ShadcnMenubarTriggerProps) {
  const ctx = useShadcnMenubar()
  const open = ctx.openMenu === id
  return (
    <button
      type="button"
      role="menuitem"
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      data-slot="shadcn-menubar-trigger"
      onClick={() => ctx.setOpenMenu(open ? null : id)}
      onMouseEnter={() => ctx.setOpenMenu(id)}
      className={cn(
        "inline-flex h-7 cursor-pointer items-center justify-center rounded-md px-2.5 text-sm font-medium text-foreground/80 transition-colors outline-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        "data-[state=open]:bg-muted data-[state=open]:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnMenubarContentProps extends HTMLAttributes<HTMLDivElement> {
  id: string
}

function ShadcnMenubarContent({ className, id, children, ...props }: ShadcnMenubarContentProps) {
  const ctx = useShadcnMenubar()
  if (ctx.openMenu !== id) return null
  return (
    <div
      role="menu"
      data-slot="shadcn-menubar-content"
      onMouseEnter={() => ctx.setOpenMenu(id)}
      className={cn(
        "absolute left-0 top-full z-50 mt-1 min-w-[12rem] rounded-lg border border-border bg-background p-1 text-foreground shadow-lg outline-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnMenubarItemProps extends HTMLAttributes<HTMLDivElement> {
  isDisabled?: boolean
}

function ShadcnMenubarItem({ className, isDisabled, children, ...props }: ShadcnMenubarItemProps) {
  return (
    <div
      role="menuitem"
      tabIndex={isDisabled ? -1 : 0}
      data-slot="shadcn-menubar-item"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none",
        "hover:bg-muted focus-visible:bg-muted",
        isDisabled && "pointer-events-none opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnMenubarGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubarGroup({ className, ...props }: ShadcnMenubarGroupProps) {
  return <div role="group" data-slot="shadcn-menubar-group" className={cn("flex flex-col", className)} {...props} />
}

interface ShadcnMenubarSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubarSeparator({ className, ...props }: ShadcnMenubarSeparatorProps) {
  return <div role="separator" data-slot="shadcn-menubar-separator" className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
}

interface ShadcnMenubarShortcutProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnMenubarShortcut({ className, ...props }: ShadcnMenubarShortcutProps) {
  return <span data-slot="shadcn-menubar-shortcut" className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}

interface ShadcnMenubarCheckboxItemProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  defaultChecked?: boolean
}

function ShadcnMenubarCheckboxItem({ className, checked, defaultChecked, children, ...props }: ShadcnMenubarCheckboxItemProps) {
  const [internal, setInternal] = useState(!!defaultChecked)
  const isChecked = checked !== undefined ? checked : internal
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={isChecked}
      data-slot="shadcn-menubar-checkbox-item"
      onClick={() => checked === undefined && setInternal(!isChecked)}
      className={cn("flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none hover:bg-muted", className)}
      {...props}
    >
      <span className="flex w-4 items-center">{isChecked && <Check className="size-4" />}</span>
      {children}
    </div>
  )
}

interface ShadcnMenubarRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const MenubarRadioContext = createContext<{ value: string; setValue: (v: string) => void } | null>(null)

function ShadcnMenubarRadioGroup({ className, value, defaultValue, onValueChange, children }: ShadcnMenubarRadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal
  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onValueChange?.(v)
  }
  return (
    <MenubarRadioContext.Provider value={{ value: current, setValue }}>
      <div role="group" data-slot="shadcn-menubar-radio-group" className={cn("flex flex-col", className)}>
        {children}
      </div>
    </MenubarRadioContext.Provider>
  )
}

interface ShadcnMenubarRadioItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function ShadcnMenubarRadioItem({ className, value, children, ...props }: ShadcnMenubarRadioItemProps) {
  const radio = useContext(MenubarRadioContext)
  const isChecked = radio?.value === value
  return (
    <div
      role="menuitemradio"
      aria-checked={isChecked}
      data-slot="shadcn-menubar-radio-item"
      onClick={() => radio?.setValue(value)}
      className={cn("flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none hover:bg-muted", className)}
      {...props}
    >
      <span className="flex w-4 items-center">{isChecked && <Check className="size-4" />}</span>
      {children}
    </div>
  )
}

interface ShadcnMenubarSubProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubarSub({ className, ...props }: ShadcnMenubarSubProps) {
  return <div className={cn("relative", className)} {...props} />
}

interface ShadcnMenubarSubTriggerProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubarSubTrigger({ className, children, ...props }: ShadcnMenubarSubTriggerProps) {
  const [open, setOpen] = useState(false)
  return (
    <div
      role="menuitem"
      data-state={open ? "open" : "closed"}
      data-slot="shadcn-menubar-sub-trigger"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={cn("flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none hover:bg-muted", className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-3.5" />
      {open && (
        <div className="absolute left-full top-0 ml-1 min-w-[10rem] rounded-lg border border-border bg-background p-1 text-foreground shadow-lg">
          {props.children}
        </div>
      )}
    </div>
  )
}

interface ShadcnMenubarSubContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnMenubarSubContent({ className, ...props }: ShadcnMenubarSubContentProps) {
  return <div data-slot="shadcn-menubar-sub-content" className={cn("flex flex-col", className)} {...props} />
}

export {
  ShadcnMenubar,
  ShadcnMenubarCheckboxItem,
  ShadcnMenubarContent,
  ShadcnMenubarGroup,
  ShadcnMenubarItem,
  ShadcnMenubarMenu,
  ShadcnMenubarRadioGroup,
  ShadcnMenubarRadioItem,
  ShadcnMenubarSeparator,
  ShadcnMenubarShortcut,
  ShadcnMenubarSub,
  ShadcnMenubarSubContent,
  ShadcnMenubarSubTrigger,
  ShadcnMenubarTrigger,
}
export type {
  ShadcnMenubarCheckboxItemProps,
  ShadcnMenubarContentProps,
  ShadcnMenubarGroupProps,
  ShadcnMenubarItemProps,
  ShadcnMenubarMenuProps,
  ShadcnMenubarProps,
  ShadcnMenubarRadioGroupProps,
  ShadcnMenubarRadioItemProps,
  ShadcnMenubarSeparatorProps,
  ShadcnMenubarShortcutProps,
  ShadcnMenubarSubContentProps,
  ShadcnMenubarSubProps,
  ShadcnMenubarSubTriggerProps,
  ShadcnMenubarTriggerProps,
}
