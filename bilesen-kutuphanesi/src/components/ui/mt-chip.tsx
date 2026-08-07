/**
 * MtChip + MtChipGroup
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Seçilebilir çip — grup (tek/çoklu), size, variant.
 *   <MtChipGroup multiple>
 *     <MtChip value="react" defaultChecked>React</MtChip>
 *   </MtChipGroup>
 * @id 1214
 * @category Seçim
 * @subcategory MtChip
 * @source mantine
 */
import { createContext, useContext, useState, type InputHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ChipContextValue {
  values: string[]
  toggle: (v: string) => void
  multiple: boolean
  name: string
}

const ChipContext = createContext<ChipContextValue | null>(null)

interface MtChipGroupProps {
  children?: ReactNode
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  multiple?: boolean
  orientation?: "horizontal" | "vertical"
  className?: string
}

function MtChipGroup({
  children,
  value,
  defaultValue,
  onChange,
  multiple = false,
  orientation = "horizontal",
  className,
}: MtChipGroupProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
  const values = value !== undefined ? value : internal

  const toggle = (v: string) => {
    const next = multiple
      ? values.includes(v) ? values.filter((x) => x !== v) : [...values, v]
      : [v]
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }

  return (
    <ChipContext.Provider value={{ values, toggle, multiple, name: "mt-chip-group" }}>
      <div
        data-slot="mt-chip-group"
        className={cn("flex", orientation === "horizontal" ? "flex-row flex-wrap gap-2" : "flex-col gap-2", className)}
      >
        {children}
      </div>
    </ChipContext.Provider>
  )
}

interface MtChipProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "size"> {
  value?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "filled" | "outline" | "light"
}

function MtChip({ className, value = "", size = "sm", variant = "filled", children, defaultChecked, ...props }: MtChipProps) {
  const ctx = useContext(ChipContext)
  if (!ctx) throw new Error("MtChip, MtChipGroup içinde kullanılmalı")
  const checked = ctx.values.includes(value)

  return (
    <label className={cn("inline-flex cursor-pointer select-none", className)}>
      <input
        type="checkbox"
        name={ctx.name}
        checked={checked}
        onChange={() => ctx.toggle(value)}
        className="peer sr-only"
        {...props}
      />
      <span
        data-slot="mt-chip"
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/30",
          size === "xs" && "px-2 py-0.5 text-xs",
          size === "lg" && "px-4 py-1.5 text-base",
          variant === "filled" && "border-transparent bg-gray-200 text-foreground peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:text-white",
          variant === "outline" && "border-border bg-background text-foreground peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700",
          variant === "light" && "border-transparent bg-blue-50 text-blue-700 peer-checked:bg-blue-600 peer-checked:text-white"
        )}
      >
        {children}
      </span>
    </label>
  )
}

export { MtChip, MtChipGroup }
export type { MtChipGroupProps, MtChipProps }
