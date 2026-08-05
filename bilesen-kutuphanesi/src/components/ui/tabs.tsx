/**
 * Tabs
 * Saf React bileşen (bağımlılıksız).
 * İçeriği sekmeler halinde düzenler — List/ListContainer/Tab/Indicator/Panel.
 *   <Tabs defaultSelectedKey="overview">
 *     <TabsListContainer>
 *       <TabsList aria-label="Options">
 *         <TabsTab id="overview">Overview<TabsIndicator /></TabsTab>
 *         <TabsTab id="analytics">Analytics<TabsIndicator /></TabsTab>
 *       </TabsList>
 *     </TabsListContainer>
 *     <TabsPanel id="overview">…</TabsPanel>
 *     <TabsPanel id="analytics">…</TabsPanel>
 *   </Tabs>
 * Özellikler: variant (primary/secondary — underline) · orientation
 * (horizontal/vertical) · selectedKey/defaultSelectedKey/onSelectionChange ·
 * isDisabled · render prop · aria-selected · data-selected.
 * @id 494
 * @category Navigasyon
 * @subcategory Tabs
 */
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type TabsVariant = "primary" | "secondary"
type TabsOrientation = "horizontal" | "vertical"

interface TabsContextValue {
  selectedKey: string
  select: (key: string) => void
  variant: TabsVariant
  orientation: TabsOrientation
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabs(): TabsContextValue {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error("useTabs, <Tabs> içinde kullanılmalı")
  return ctx
}

/* ---------- Tabs ---------- */

interface TabsProps {
  children?: ReactNode
  className?: string
  variant?: TabsVariant
  orientation?: TabsOrientation
  selectedKey?: string
  defaultSelectedKey?: string
  onSelectionChange?: (key: string) => void
  render?: (props: Record<string, unknown>) => ReactNode
}

function Tabs({
  children,
  className,
  variant = "primary",
  orientation = "horizontal",
  selectedKey: selectedKeyProp,
  defaultSelectedKey = "",
  onSelectionChange,
  render,
}: TabsProps) {
  const [internalKey, setInternalKey] = useState(defaultSelectedKey)
  const selectedKey = selectedKeyProp ?? internalKey

  const select = (key: string) => {
    setInternalKey(key)
    onSelectionChange?.(key)
  }

  const contextValue: TabsContextValue = { selectedKey, select, variant, orientation }

  const rootProps: Record<string, unknown> = {
    "data-slot": "tabs",
    "data-orientation": orientation,
    "data-variant": variant,
    className: cn("flex", orientation === "vertical" ? "flex-row gap-4" : "flex-col gap-3", className),
  }

  return (
    <TabsContext.Provider value={contextValue}>
      {render ? render({ ...rootProps, children }) : <div {...rootProps}>{children}</div>}
    </TabsContext.Provider>
  )
}

/* ---------- ListContainer ---------- */

interface TabsListContainerProps {
  children?: ReactNode
  className?: string
}

function TabsListContainer({ children, className }: TabsListContainerProps) {
  const ctx = useTabs()
  return (
    <div data-slot="tabs-list-container" className={cn("overflow-x-auto", ctx.orientation === "vertical" && "overflow-y-auto", className)}>
      {children}
    </div>
  )
}

/* ---------- List ---------- */

interface TabsListProps {
  children?: ReactNode
  className?: string
  "aria-label"?: string
}

function TabsList({ children, className, ...aria }: TabsListProps) {
  const ctx = useTabs()
  return (
    <div
      data-slot="tabs-list"
      role="tablist"
      aria-orientation={ctx.orientation}
      className={cn(
        "inline-flex w-max items-center gap-1 rounded-xl border border-border bg-background p-1",
        ctx.orientation === "vertical" && "flex-col items-stretch",
        ctx.variant === "secondary" && "rounded-none border-0 border-b border-border bg-transparent p-0",
        className
      )}
      {...aria}
    >
      {children}
    </div>
  )
}

/* ---------- Tab ---------- */

interface TabsTabProps {
  children?: ReactNode
  className?: string
  id: string
  isDisabled?: boolean
}

function TabsTab({ children, className, id, isDisabled = false }: TabsTabProps) {
  const ctx = useTabs()
  const selected = ctx.selectedKey === id

  return (
    <button
      type="button"
      role="tab"
      data-slot="tabs-tab"
      aria-selected={selected}
      aria-disabled={isDisabled || undefined}
      disabled={isDisabled}
      onClick={() => !isDisabled && ctx.select(id)}
      className={cn(
        "relative inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium text-muted-foreground transition-colors outline-none",
        "hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
        selected && ctx.variant === "primary" && "bg-foreground text-background hover:bg-foreground hover:text-background",
        selected && ctx.variant === "secondary" && "text-foreground",
        isDisabled && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-muted-foreground",
        ctx.orientation === "vertical" && "w-full justify-start",
        className
      )}
    >
      {children}
    </button>
  )
}

/* ---------- Indicator ---------- */

interface TabsIndicatorProps {
  className?: string
}

function TabsIndicator({ className }: TabsIndicatorProps) {
  return <span data-slot="tabs-indicator" aria-hidden="true" className={cn("absolute inset-x-2 bottom-0.5 h-0.5 rounded-full bg-current opacity-80", className)} />
}

/* ---------- Separator ---------- */

interface TabsSeparatorProps {
  className?: string
}

function TabsSeparator({ className }: TabsSeparatorProps) {
  return <span data-slot="tabs-separator" aria-hidden="true" className={cn("mx-1 h-4 w-px bg-border", className)} />
}

/* ---------- Panel ---------- */

interface TabsPanelProps {
  children?: ReactNode
  className?: string
  id: string
}

function TabsPanel({ children, className, id }: TabsPanelProps) {
  const ctx = useTabs()
  const selected = ctx.selectedKey === id
  return (
    <div
      data-slot="tabs-panel"
      role="tabpanel"
      data-selected={selected ? "true" : undefined}
      className={cn("text-sm text-muted-foreground", !selected && "hidden", className)}
    >
      {children}
    </div>
  )
}

export { Tabs, TabsIndicator, TabsList, TabsListContainer, TabsPanel, TabsSeparator, TabsTab, useTabs }
export type { TabsIndicatorProps, TabsListProps, TabsOrientation, TabsPanelProps, TabsProps, TabsTabProps, TabsVariant }
