/**
 * ShadcnTabs familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Sekmeler — Tabs + List + Trigger + Content.
 *   <ShadcnTabs defaultValue="overview">
 *     <ShadcnTabsList>
 *       <ShadcnTabsTrigger value="overview">Overview</ShadcnTabsTrigger>
 *     </ShadcnTabsList>
 *     <ShadcnTabsContent value="overview">…</ShadcnTabsContent>
 *   </ShadcnTabs>
 * @id 834
 * @category Navigasyon
 * @subcategory ShadcnTabs
 * @source shadcn
 */
import { createContext, useContext, useState, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  setValue: (v: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useShadcnTabs(): TabsContextValue {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error("ShadcnTabs parçaları, ShadcnTabs içinde kullanılmalı")
  return ctx
}

interface ShadcnTabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

function ShadcnTabs({ children, className, defaultValue, value, onValueChange, ...props }: ShadcnTabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal
  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onValueChange?.(v)
  }
  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div data-slot="shadcn-tabs" className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface ShadcnTabsListProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnTabsList({ className, ...props }: ShadcnTabsListProps) {
  return (
    <div
      role="tablist"
      data-slot="shadcn-tabs-list"
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnTabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  isDisabled?: boolean
}

function ShadcnTabsTrigger({ className, value, isDisabled, children, ...props }: ShadcnTabsTriggerProps) {
  const ctx = useShadcnTabs()
  const selected = ctx.value === value
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      data-state={selected ? "active" : "inactive"}
      data-slot="shadcn-tabs-trigger"
      disabled={isDisabled}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "inline-flex h-7 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium whitespace-nowrap transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        selected ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface ShadcnTabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function ShadcnTabsContent({ className, value, children, ...props }: ShadcnTabsContentProps) {
  const ctx = useShadcnTabs()
  if (ctx.value !== value) return null
  return (
    <div
      role="tabpanel"
      data-slot="shadcn-tabs-content"
      className={cn("mt-2 outline-none", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnTabs, ShadcnTabsContent, ShadcnTabsList, ShadcnTabsTrigger }
export type { ShadcnTabsContentProps, ShadcnTabsListProps, ShadcnTabsProps, ShadcnTabsTriggerProps }
