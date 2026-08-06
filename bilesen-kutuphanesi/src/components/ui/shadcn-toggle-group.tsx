/**
 * ShadcnToggleGroup + ShadcnToggleGroupItem
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Anahtar grubu — tek veya çoklu seçim (multiple).
 *   <ShadcnToggleGroup variant="outline" multiple defaultValue={["bold"]}>
 *     <ShadcnToggleGroupItem value="bold">Bold</ShadcnToggleGroupItem>
 *   </ShadcnToggleGroup>
 * @id 732
 * @category Toggle
 * @subcategory ShadcnToggleGroup
 * @source shadcn
 */
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ToggleGroupContextValue {
  values: string[]
  toggle: (value: string) => void
  multiple: boolean
  disabled: boolean
  variant: "default" | "outline"
  size: "sm" | "default" | "lg"
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null)

function useShadcnToggleGroup(): ToggleGroupContextValue {
  const ctx = useContext(ToggleGroupContext)
  if (!ctx) throw new Error("ShadcnToggleGroupItem, ShadcnToggleGroup içinde kullanılmalı")
  return ctx
}

interface ShadcnToggleGroupProps {
  children?: ReactNode
  className?: string
  variant?: "default" | "outline"
  size?: "sm" | "default" | "lg"
  orientation?: "horizontal" | "vertical"
  spacing?: number
  multiple?: boolean
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (values: string[]) => void
  isDisabled?: boolean
}

function ShadcnToggleGroup({
  children,
  className,
  variant = "default",
  size = "default",
  orientation = "horizontal",
  spacing = 0,
  multiple = false,
  value,
  defaultValue,
  onValueChange,
  isDisabled,
}: ShadcnToggleGroupProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue ?? [])
  const values = value !== undefined ? value : internal

  const toggle = (v: string) => {
    if (multiple) {
      const next = values.includes(v) ? values.filter((x) => x !== v) : [...values, v]
      if (value === undefined) setInternal(next)
      onValueChange?.(next)
    } else {
      const next = values.includes(v) ? [] : [v]
      if (value === undefined) setInternal(next)
      onValueChange?.(next)
    }
  }

  return (
    <ToggleGroupContext.Provider value={{ values, toggle, multiple, disabled: !!isDisabled, variant, size }}>
      <div
        data-slot="shadcn-toggle-group"
        className={cn(
          "inline-flex",
          orientation === "horizontal" ? "flex-row items-center" : "flex-col items-start",
          variant === "outline" && "rounded-md border border-border bg-background p-0.5",
          className
        )}
        style={{ gap: spacing ? `${spacing * 4}px` : undefined }}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  )
}

interface ShadcnToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  isDisabled?: boolean
}

function ShadcnToggleGroupItem({ value, isDisabled, className, children, ...props }: ShadcnToggleGroupItemProps) {
  const ctx = useShadcnToggleGroup()
  const pressed = ctx.values.includes(value)
  const disabled = isDisabled || ctx.disabled

  return (
    <button
      type="button"
      data-slot="shadcn-toggle-group-item"
      data-state={pressed ? "on" : "off"}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={() => ctx.toggle(value)}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors outline-none",
        "focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-pressed:bg-blue-600 aria-pressed:text-white",
        ctx.variant === "outline" && "text-foreground hover:bg-muted aria-pressed:border-blue-600",
        ctx.variant === "default" && "text-foreground hover:bg-muted",
        ctx.size === "sm" && "h-7 px-2",
        ctx.size === "default" && "h-8 px-3",
        ctx.size === "lg" && "h-10 px-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { ShadcnToggleGroup, ShadcnToggleGroupItem }
export type { ShadcnToggleGroupItemProps, ShadcnToggleGroupProps }
