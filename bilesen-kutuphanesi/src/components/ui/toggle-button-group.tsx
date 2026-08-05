/**
 * ToggleButtonGroup
 * Saf React bileşen (bağımlılıksız).
 * Birden çok ToggleButton'ı tek kontrolde gruplar — tek/çoklu seçim.
 *   <ToggleButtonGroup selectionMode="multiple">
 *     <ToggleButton id="bold"><Bold /></ToggleButton>
 *     <ToggleButton id="italic"><ToggleButtonGroupSeparator /><Italic /></ToggleButton>
 *   </ToggleButtonGroup>
 * Özellikler: selectionMode (single/multiple) · selectedKeys/defaultSelectedKeys/
 * onSelectionChange · size (sm/md/lg) · isDisabled · fullWidth · orientation
 * (horizontal/vertical) · ToggleButtonGroupSeparator.
 * @id 425
 * @category Seçim
 * @subcategory ToggleButtonGroup
 */
import { createContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Types ---------- */

type ToggleButtonSize = "sm" | "md" | "lg"

interface ToggleButtonGroupContextValue {
  selectedKeys: string[]
  toggle: (id: string) => void
  selectionMode: "single" | "multiple"
  size: ToggleButtonSize
  isDisabled: boolean
}

const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextValue | null>(null)

interface ToggleButtonGroupProps {
  children?: ReactNode
  className?: string
  selectionMode?: "single" | "multiple"
  selectedKeys?: string[]
  defaultSelectedKeys?: string[]
  onSelectionChange?: (keys: string[]) => void
  size?: ToggleButtonSize
  isDisabled?: boolean
  fullWidth?: boolean
  orientation?: "horizontal" | "vertical"
}

function ToggleButtonGroup({
  children,
  className,
  selectionMode = "multiple",
  selectedKeys: selectedKeysProp,
  defaultSelectedKeys,
  onSelectionChange,
  size = "md",
  isDisabled = false,
  fullWidth = false,
  orientation = "horizontal",
}: ToggleButtonGroupProps) {
  const [internalKeys, setInternalKeys] = useState<string[]>(defaultSelectedKeys ?? [])
  const selectedKeys = selectedKeysProp ?? internalKeys

  const toggle = (id: string) => {
    let next: string[]
    if (selectionMode === "single") {
      next = selectedKeys.includes(id) ? [] : [id]
    } else {
      next = selectedKeys.includes(id) ? selectedKeys.filter((k) => k !== id) : [...selectedKeys, id]
    }
    setInternalKeys(next)
    onSelectionChange?.(next)
  }

  const contextValue: ToggleButtonGroupContextValue = { selectedKeys, toggle, selectionMode, size, isDisabled }

  return (
    <ToggleButtonGroupContext.Provider value={contextValue}>
      <div
        data-slot="toggle-button-group"
        data-orientation={orientation}
        className={cn(
          "inline-flex items-center gap-0 rounded-xl border border-border bg-background p-1",
          orientation === "vertical" && "flex-col",
          fullWidth && "w-full [&_[data-slot=toggle-button]]:flex-1",
          className
        )}
      >
        {children}
      </div>
    </ToggleButtonGroupContext.Provider>
  )
}

/* ---------- Separator ---------- */

interface ToggleButtonGroupSeparatorProps {
  className?: string
}

function ToggleButtonGroupSeparator({ className }: ToggleButtonGroupSeparatorProps) {
  return (
    <span
      data-slot="toggle-button-group-separator"
      aria-hidden="true"
      className={cn("mx-1 inline-block h-4 w-px bg-border", className)}
    />
  )
}

export { ToggleButtonGroup, ToggleButtonGroupContext, ToggleButtonGroupSeparator }
export type { ToggleButtonGroupProps, ToggleButtonGroupSeparatorProps, ToggleButtonSize }
