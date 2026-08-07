/**
 * MtSegmentedControl
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Bölümlü kontrol — tek seçim, data, size, orientation.
 *   <MtSegmentedControl data={["React", "Vue", "Angular"]} />
 * @id 1215
 * @category Seçim
 * @subcategory MtSegmentedControl
 * @source mantine
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtSegmentedControlProps {
  data?: (string | { value: string; label: ReactNode; disabled?: boolean })[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  orientation?: "horizontal" | "vertical"
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

function MtSegmentedControl({
  data = [],
  value,
  defaultValue,
  onChange,
  size = "sm",
  orientation = "horizontal",
  disabled,
  fullWidth,
  className,
}: MtSegmentedControlProps) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const current = value !== undefined ? value : internal

  const items = data.map((d) => (typeof d === "string" ? { value: d, label: d } : d))

  return (
    <div
      role="radiogroup"
      data-slot="mt-segmented-control"
      className={cn(
        "inline-flex rounded-md bg-gray-200 p-1",
        orientation === "vertical" ? "flex-col" : "flex-row",
        fullWidth && "w-full [&>div]:flex-1",
        disabled && "opacity-50",
        className
      )}
    >
      {items.map((item) => {
        const active = current === item.value
        return (
          <button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled || item.disabled}
            onClick={() => {
              setInternal(item.value)
              onChange?.(item.value)
            }}
            className={cn(
              "cursor-pointer rounded px-3 py-1 text-sm font-medium text-muted-foreground transition-colors outline-none select-none",
              "hover:text-foreground focus-visible:ring-2 focus-visible:ring-blue-500/30",
              "disabled:cursor-not-allowed disabled:opacity-50",
              active && "bg-background text-foreground shadow-sm",
              size === "xs" && "px-2 py-0.5 text-xs",
              size === "lg" && "px-4 py-2 text-base",
              orientation === "vertical" && "text-left"
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export { MtSegmentedControl }
export type { MtSegmentedControlProps }
