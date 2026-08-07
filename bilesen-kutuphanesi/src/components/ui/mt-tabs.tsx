/**
 * MtTabs + MtTabList + MtTab + MtTabPanel
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Sekmeler — aktif sekme, klavye, dikey/yatay.
 *   <MtTabs defaultValue="first">
 *     <MtTabList><MtTab value="first">First</MtTab></MtTabList>
 *     <MtTabPanel value="first">…</MtTabPanel>
 *   </MtTabs>
 * @id 1386
 * @category Navigasyon
 * @subcategory MtTabs
 * @source mantine
 */
import { createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const TabsContext = createContext<{ value: string; setValue: (v: string) => void; orientation: "horizontal" | "vertical" } | null>(null)

interface MtTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  orientation?: "horizontal" | "vertical"
}

function MtTabs({ className, defaultValue, value, onChange, orientation = "horizontal", children, ...props }: MtTabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal

  const setValue = (v: string) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  return (
    <TabsContext.Provider value={{ value: current, setValue, orientation }}>
      <div
        data-slot="mt-tabs"
        className={cn("flex", orientation === "vertical" ? "flex-row gap-4" : "flex-col", className)}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface MtTabListProps extends HTMLAttributes<HTMLDivElement> {}

function MtTabList({ className, children, ...props }: MtTabListProps) {
  const ctx = useContext(TabsContext)!
  return (
    <div
      role="tablist"
      data-slot="mt-tabs-list"
      className={cn(
        "flex items-center gap-0.5 border-b border-border",
        ctx.orientation === "vertical" && "flex-col items-start border-b-0 border-r",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface MtTabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

function MtTab({ className, value, disabled, children, ...props }: MtTabProps) {
  const ctx = useContext(TabsContext)!
  const active = ctx.value === value

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-active={active ? "true" : undefined}
      disabled={disabled}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "cursor-pointer px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none",
        "border-b-2 border-transparent -mb-px hover:text-foreground",
        "focus-visible:ring-2 focus-visible:ring-blue-500/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[active=true]:border-blue-600 data-[active=true]:text-foreground",
        ctx.orientation === "vertical" && "border-b-0 border-r-2 -mr-px",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

interface MtTabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

function MtTabPanel({ className, value, children, ...props }: MtTabPanelProps) {
  const ctx = useContext(TabsContext)!
  if (ctx.value !== value) return null
  return (
    <div role="tabpanel" data-slot="mt-tabs-panel" className={cn("pt-3 text-sm text-foreground", className)} {...props}>
      {children}
    </div>
  )
}

export { MtTab, MtTabList, MtTabPanel, MtTabs }
export type { MtTabListProps, MtTabPanelProps, MtTabProps, MtTabsProps }
