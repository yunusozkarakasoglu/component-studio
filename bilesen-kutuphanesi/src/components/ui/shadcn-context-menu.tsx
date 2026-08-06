/**
 * ShadcnContextMenu familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Sağ tıklama menüsü — Trigger (onContextMenu) + Content + Item/Group/Separator/
 * Shortcut/CheckboxItem/RadioGroup/RadioItem.
 *   <ShadcnContextMenu>
 *     <ShadcnContextMenuTrigger>Right click here</ShadcnContextMenuTrigger>
 *     <ShadcnContextMenuContent>
 *       <ShadcnContextMenuItem>Back <ShadcnContextMenuShortcut>⌘[</ShadcnContextMenuShortcut></ShadcnContextMenuItem>
 *     </ShadcnContextMenuContent>
 *   </ShadcnContextMenu>
 * @id 813
 * @category Overlay
 * @subcategory ShadcnContextMenu
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type MouseEvent as ReactMouseEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

interface ContextMenuContextValue {
  open: boolean
  pos: { x: number; y: number }
  openAt: (x: number, y: number) => void
  close: () => void
}

const ContextMenuContext = createContext<ContextMenuContextValue | null>(null)

function useShadcnContextMenu(): ContextMenuContextValue {
  const ctx = useContext(ContextMenuContext)
  if (!ctx) throw new Error("ShadcnContextMenu parçaları, ShadcnContextMenu içinde kullanılmalı")
  return ctx
}

interface ShadcnContextMenuProps {
  children?: ReactNode
}

function ShadcnContextMenu({ children }: ShadcnContextMenuProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [open, setOpen] = useState(false)

  const value: ContextMenuContextValue = {
    open,
    pos,
    openAt: (x, y) => {
      setPos({ x, y })
      setOpen(true)
    },
    close: () => setOpen(false),
  }

  return <ContextMenuContext.Provider value={value}>{children}</ContextMenuContext.Provider>
}

interface ShadcnContextMenuTriggerProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnContextMenuTrigger({ className, onContextMenu, children, ...props }: ShadcnContextMenuTriggerProps) {
  const ctx = useShadcnContextMenu()
  return (
    <div
      data-slot="shadcn-context-menu-trigger"
      onContextMenu={(e: ReactMouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        ctx.openAt(e.clientX, e.clientY)
        onContextMenu?.(e)
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnContextMenuContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnContextMenuContent({ className, children, ...props }: ShadcnContextMenuContentProps) {
  const ctx = useShadcnContextMenu()
  if (!ctx.open) return null

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={() => ctx.close()} onContextMenu={(e) => { e.preventDefault(); ctx.close() }} />
      <div
        role="menu"
        data-slot="shadcn-context-menu-content"
        style={{ left: ctx.pos.x, top: ctx.pos.y }}
        className={cn(
          "fixed z-50 min-w-48 rounded-lg border border-border bg-background p-1 text-foreground shadow-lg outline-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

interface ShadcnContextMenuItemProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
  isDisabled?: boolean
}

function ShadcnContextMenuItem({ className, variant = "default", isDisabled, children, onClick, ...props }: ShadcnContextMenuItemProps) {
  const ctx = useShadcnContextMenu()
  return (
    <div
      role="menuitem"
      tabIndex={isDisabled ? -1 : 0}
      data-slot="shadcn-context-menu-item"
      onClick={(e) => {
        if (isDisabled) return
        ctx.close()
        onClick?.(e)
      }}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none",
        "focus-visible:bg-muted focus-visible:text-foreground",
        isDisabled && "pointer-events-none opacity-50",
        variant === "destructive" && "text-red-600 focus-visible:bg-red-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface ShadcnContextMenuGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnContextMenuGroup({ className, ...props }: ShadcnContextMenuGroupProps) {
  return <div role="group" data-slot="shadcn-context-menu-group" className={cn("flex flex-col", className)} {...props} />
}

interface ShadcnContextMenuSeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnContextMenuSeparator({ className, ...props }: ShadcnContextMenuSeparatorProps) {
  return <div role="separator" data-slot="shadcn-context-menu-separator" className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
}

interface ShadcnContextMenuShortcutProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnContextMenuShortcut({ className, ...props }: ShadcnContextMenuShortcutProps) {
  return <span data-slot="shadcn-context-menu-shortcut" className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}

interface ShadcnContextMenuCheckboxItemProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean
  defaultChecked?: boolean
}

function ShadcnContextMenuCheckboxItem({ className, checked, defaultChecked, children, ...props }: ShadcnContextMenuCheckboxItemProps) {
  const [internal, setInternal] = useState(!!defaultChecked)
  const isChecked = checked !== undefined ? checked : internal
  const ctx = useShadcnContextMenu()
  return (
    <div
      role="menuitemcheckbox"
      aria-checked={isChecked}
      data-slot="shadcn-context-menu-checkbox-item"
      onClick={() => {
        if (checked === undefined) setInternal(!isChecked)
        ctx.close()
      }}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none hover:bg-muted",
        className
      )}
      {...props}
    >
      <span className="flex w-4 items-center">{isChecked && <Check className="size-4" />}</span>
      {children}
    </div>
  )
}

interface ShadcnContextMenuRadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

function ShadcnContextMenuRadioGroup({ className, value, defaultValue, onValueChange, children }: ShadcnContextMenuRadioGroupProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal
  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onValueChange?.(v)
  }
  return (
    <ContextMenuRadioContext.Provider value={{ value: current, setValue }}>
      <div role="group" data-slot="shadcn-context-menu-radio-group" className={cn("flex flex-col", className)}>
        {children}
      </div>
    </ContextMenuRadioContext.Provider>
  )
}

interface ShadcnContextMenuRadioItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

const ContextMenuRadioContext = createContext<{ value: string; setValue: (v: string) => void } | null>(null)

function ShadcnContextMenuRadioItem({ className, value, children, ...props }: ShadcnContextMenuRadioItemProps) {
  const radio = useContext(ContextMenuRadioContext)
  const ctx = useShadcnContextMenu()
  const isChecked = radio?.value === value
  return (
    <div
      role="menuitemradio"
      aria-checked={isChecked}
      data-slot="shadcn-context-menu-radio-item"
      onClick={() => {
        radio?.setValue(value)
        ctx.close()
      }}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none select-none hover:bg-muted",
        className
      )}
      {...props}
    >
      <span className="flex w-4 items-center">{isChecked && <Check className="size-4" />}</span>
      {children}
    </div>
  )
}

export {
  ShadcnContextMenu,
  ShadcnContextMenuCheckboxItem,
  ShadcnContextMenuContent,
  ShadcnContextMenuGroup,
  ShadcnContextMenuItem,
  ShadcnContextMenuRadioGroup,
  ShadcnContextMenuRadioItem,
  ShadcnContextMenuSeparator,
  ShadcnContextMenuShortcut,
  ShadcnContextMenuTrigger,
}
export type {
  ShadcnContextMenuCheckboxItemProps,
  ShadcnContextMenuContentProps,
  ShadcnContextMenuGroupProps,
  ShadcnContextMenuItemProps,
  ShadcnContextMenuProps,
  ShadcnContextMenuRadioGroupProps,
  ShadcnContextMenuRadioItemProps,
  ShadcnContextMenuSeparatorProps,
  ShadcnContextMenuShortcutProps,
  ShadcnContextMenuTriggerProps,
}
