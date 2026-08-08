/**
 * MtTimeInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Saat girdisi — native time input, withSeconds, label.
 *   <MtTimeInput label="Saat" value={value} onChange={setValue} />
 * @id 1593
 * @category Takvim
 * @subcategory MtTimeInput
 * @source mantine
 */
import type { InputHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtTimeInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "size"> {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  value?: string | null
  onChange?: (value: string) => void
  withSeconds?: boolean
  size?: "xs" | "sm" | "md" | "lg"
}

const sizes: Record<string, string> = { xs: "h-6 text-xs", sm: "h-8 text-sm", md: "h-9 text-sm", lg: "h-11 text-base" }

function MtTimeInput({ label, description, error, value, onChange, withSeconds, size = "md", className, ...props }: MtTimeInputProps) {
  return (
    <label className={cn("flex w-fit flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <input
        type="time"
        step={withSeconds ? 1 : 60}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "w-36 cursor-pointer rounded-lg border border-border bg-background px-3 text-foreground outline-none transition-colors",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          error && "border-red-500",
          sizes[size],
          className
        )}
        {...props}
      />
      {description && !error && <span className="text-xs text-muted-foreground">{description}</span>}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}

export { MtTimeInput }
export type { MtTimeInputProps }
