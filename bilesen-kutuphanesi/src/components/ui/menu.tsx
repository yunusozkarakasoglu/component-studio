/**
 * Menu (Dropdown)
 * Saf React bileşen (bağımlılıksız).
 * Aksiyon/opsiyon listesi açılır menüsü — trigger + popover + item yönetimi.
 *   <Menu>
 *     <Button>Actions</Button>
 *     <MenuPopover>
 *       <MenuList onAction={(key) => console.log(key)}>
 *         <MenuItem id="new"><Label>New file</Label></MenuItem>
 *         <MenuItem id="delete" variant="danger"><Label>Delete file</Label></MenuItem>
 *       </MenuList>
 *     </MenuPopover>
 *   </Menu>
 * Özellikler: selectionMode (none/single/multiple) · selectedKeys/defaultSelectedKeys/
 * onSelectionChange · onAction · disabled · variant (default/danger) ·
 * MenuSection (başlıklı grup) · MenuItemIndicator (seçim işareti) · dışarı
 * tıklama kapatma · giriş animasyonu.
 * @id 472
 * @category Overlay
 * @subcategory Menu
 */
import {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

/* ---------- Types ---------- */

type MenuSelectionMode = "none" | "single" | "multiple"

interface MenuContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  selectionMode: MenuSelectionMode
  selectedKeys: string[]
  toggleKey: (key: string) => void
  triggerAction: (key: string) => void
}

const MenuContext = createContext<MenuContextValue | null>(null)

function useMenu(): MenuContextValue {
  const ctx = useContext(MenuContext)
  if (!ctx) throw new Error("useMenu, <Menu> içinde kullanılmalı")
  return ctx
}

interface MenuProps {
  children?: ReactNode
  selectionMode?: MenuSelectionMode
  selectedKeys?: string[]
  defaultSelectedKeys?: string[]
  onSelectionChange?: (keys: string[]) => void
  onAction?: (key: string) => void
}

function Menu({
  children,
  selectionMode = "none",
  selectedKeys: selectedKeysProp,
  defaultSelectedKeys,
  onSelectionChange,
  onAction,
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [internalKeys, setInternalKeys] = useState<string[]>(defaultSelectedKeys ?? [])
  const selectedKeys = selectedKeysProp ?? internalKeys

  const toggleKey = useCallback(
    (key: string) => {
      if (selectionMode === "none") return
      let next: string[]
      if (selectionMode === "single") {
        next = selectedKeys.includes(key) ? [] : [key]
      } else {
        next = selectedKeys.includes(key) ? selectedKeys.filter((k) => k !== key) : [...selectedKeys, key]
      }
      setInternalKeys(next)
      onSelectionChange?.(next)
    },
    [selectionMode, selectedKeys, onSelectionChange]
  )

  const triggerAction = useCallback(
    (key: string) => {
      onAction?.(key)
      setIsOpen(false)
    },
    [onAction]
  )

  const contextValue: MenuContextValue = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    selectionMode,
    selectedKeys,
    toggleKey,
    triggerAction,
  }

  // İlk çocuk trigger'dır — onClick ile açılır
  const kids = Children.toArray(children)
  const trigger = kids[0] as ReactElement | undefined
  const rest = kids.slice(1)
  const triggerWithHandler = trigger
    ? cloneElement(trigger, { onClick: () => setIsOpen(true) } as Record<string, unknown>)
    : null

  return (
    <MenuContext.Provider value={contextValue}>
      {triggerWithHandler}
      {rest}
    </MenuContext.Provider>
  )
}

/* ---------- Trigger ---------- */

interface MenuTriggerProps {
  children?: ReactNode
  className?: string
}

function MenuTrigger({ children, className }: MenuTriggerProps) {
  const ctx = useMenu()
  return (
    <div data-slot="menu-trigger" className={cn("inline-flex", className)} onClick={ctx.open}>
      {children}
    </div>
  )
}

/* ---------- Popover ---------- */

interface MenuPopoverProps {
  children?: ReactNode
  className?: string
}

function MenuPopover({ children, className }: MenuPopoverProps) {
  const ctx = useMenu()

  // Dışarı tıklama kapat
  useEffect(() => {
    if (!ctx.isOpen) return
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-slot=menu]")) ctx.close()
    }
    document.addEventListener("click", onDocClick)
    return () => document.removeEventListener("click", onDocClick)
  }, [ctx.isOpen, ctx])

  if (!ctx.isOpen) return null

  return (
    <div
      data-slot="menu-popover"
      data-entering=""
      className={cn(
        "absolute z-50 min-w-44 overflow-hidden rounded-lg border border-border bg-background p-1 text-foreground shadow-xl",
        "data-[entering]:animate-in data-[entering]:fade-in-0 data-[entering]:zoom-in-95 data-[entering]:duration-150",
        className
      )}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

/* ---------- Menu (liste) ---------- */

interface MenuListProps {
  children?: ReactNode
  className?: string
  onAction?: (key: string) => void
}

function MenuList({ children, className, onAction }: MenuListProps) {
  const ctx = useMenu()
  const handleAction = (key: string) => {
    onAction?.(key)
    ctx.close()
  }
  return (
    <div data-slot="menu" role="menu" className={cn("flex flex-col", className)} onClick={() => {}}>
      {children && <MenuListProvider onAction={handleAction}>{children}</MenuListProvider>}
    </div>
  )
}

const MenuActionContext = createContext<(key: string) => void>(() => {})

function MenuListProvider({ children, onAction }: { children: ReactNode; onAction: (key: string) => void }) {
  return <MenuActionContext.Provider value={onAction}>{children}</MenuActionContext.Provider>
}

function useMenuAction(): (key: string) => void {
  return useContext(MenuActionContext)
}

/* ---------- Item ---------- */

interface MenuItemProps {
  children?: ReactNode
  id: string
  textValue?: string
  variant?: "default" | "danger"
  isDisabled?: boolean
}

function MenuItem({ children, id, variant = "default", isDisabled = false }: MenuItemProps) {
  const ctx = useMenu()
  const action = useMenuAction()
  const selected = ctx.selectionMode !== "none" && ctx.selectedKeys.includes(id)

  return (
    <button
      type="button"
      role="menuitem"
      aria-checked={ctx.selectionMode !== "none" ? selected : undefined}
      data-slot="menu-item"
      data-variant={variant}
      data-selected={selected ? "true" : undefined}
      disabled={isDisabled}
      onClick={(e) => {
        e.stopPropagation()
        if (isDisabled) return
        if (ctx.selectionMode !== "none") ctx.toggleKey(id)
        action(id)
      }}
      className={cn(
        "flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/50",
        variant === "danger" && "text-red-600 hover:bg-red-500/10 hover:text-red-700",
        isDisabled && "cursor-not-allowed opacity-50 hover:bg-transparent",
        classNameItem
      )}
    >
      {children}
    </button>
  )
}

const classNameItem = ""

/* ---------- ItemIndicator ---------- */

interface MenuItemIndicatorProps {
  className?: string
}

function MenuItemIndicator({ className }: MenuItemIndicatorProps) {
  return (
    <span data-slot="menu-item-indicator" className={cn("ml-auto flex size-4 items-center justify-center", className)}>
      <Check className="size-4" />
    </span>
  )
}

/* ---------- Section ---------- */

interface MenuSectionProps {
  children?: ReactNode
  title?: ReactNode
  className?: string
}

function MenuSection({ children, title, className }: MenuSectionProps) {
  return (
    <div data-slot="menu-section" className={cn("flex flex-col", className)}>
      {title != null && (
        <div data-slot="menu-section-title" className="px-2.5 pt-2 pb-1 text-xs font-medium text-muted-foreground">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

/* ---------- Separator ---------- */

function MenuSeparator({ className }: { className?: string }) {
  return <div data-slot="menu-separator" aria-hidden="true" className={cn("my-1 h-px bg-border", className)} />
}

export { Menu, MenuItem, MenuItemIndicator, MenuList, MenuPopover, MenuSection, MenuSeparator, MenuTrigger, useMenu }
export type { MenuItemProps, MenuListProps, MenuPopoverProps, MenuProps, MenuSectionProps, MenuSelectionMode }
