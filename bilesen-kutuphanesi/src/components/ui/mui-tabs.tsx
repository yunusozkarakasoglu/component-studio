/**
 * MuiTabs
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Sekmeler — içerikleri değiştiren sekmeler.
 *   <MuiTabs tabs={[{label, content}]} />
 * tabs: {label, icon?, content?}[] · value/defaultValue · onChange
 * orientation: horizontal/vertical · variant: standard/scrollable/fullWidth
 * color: primary/secondary · textColor
 * @id 1996
 * @category Navigasyon
 * @subcategory MuiTabs
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiTabItem {
  label: ReactNode
  icon?: ReactNode
  content?: ReactNode
}

interface MuiTabsProps {
  tabs?: MuiTabItem[]
  value?: number
  defaultValue?: number
  onChange?: (index: number) => void
  orientation?: "horizontal" | "vertical"
  color?: "primary" | "secondary"
  centered?: boolean
  className?: string
}

function MuiTabs({
  tabs = [{ label: "Sekme 1", content: "İçerik 1" }, { label: "Sekme 2", content: "İçerik 2" }],
  value,
  defaultValue = 0,
  onChange,
  orientation = "horizontal",
  color = "primary",
  centered = false,
  className,
}: MuiTabsProps) {
  const [internal, setInternal] = useState(defaultValue)
  const active = value ?? internal
  const underline =
    color === "secondary"
      ? "border-purple-600 text-purple-700"
      : "border-blue-600 text-blue-700"

  return (
    <div className={cn("flex", orientation === "vertical" ? "flex-row" : "flex-col", className)}>
      <div
        role="tablist"
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col border-r border-gray-200" : "border-b border-gray-200",
          centered && orientation === "horizontal" && "justify-center"
        )}
      >
        {tabs.map((t, i) => {
          const isActive = i === active
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setInternal(i)
                if (onChange) onChange(i)
              }}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors",
                orientation === "vertical" ? "border-r-2 text-left" : "border-b-2",
                isActive ? cn(underline, "bg-white") : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {t.icon}
              {t.label}
            </button>
          )
        })}
      </div>
      <div role="tabpanel" className="flex-1 p-4 text-sm text-gray-700">
        {tabs[active]?.content ?? tabs[active]?.label}
      </div>
    </div>
  )
}

export { MuiTabs }
export type { MuiTabsProps, MuiTabItem }
