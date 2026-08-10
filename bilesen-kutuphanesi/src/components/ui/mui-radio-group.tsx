/**
 * MuiRadioGroup
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Radyo grubu — tek seçim davranışı sağlar.
 *   <MuiRadioGroup label="Cinsiyet" options={[{value,label}]} defaultValue="female" />
 * options: {value, label, disabled?}[] · defaultValue · onChange · row (yatay)
 * @id 1947
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MuiRadio } from "@/components/ui/mui-radio"

interface MuiRadioGroupProps {
  label?: ReactNode
  options: { value: string; label: ReactNode; disabled?: boolean }[]
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  row?: boolean
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "default"
  className?: string
}

function MuiRadioGroup({ label, options, defaultValue, value, onChange, row = false, color = "primary", className }: MuiRadioGroupProps) {
  const [internal, setInternal] = useState<string | undefined>(defaultValue)
  const active = value ?? internal
  return (
    <div className={cn("flex flex-col", className)}>
      {label && <span className="mb-1 text-sm text-gray-700">{label}</span>}
      <div role="radiogroup" className={cn("flex", row ? "flex-row gap-4" : "flex-col gap-1.5")}>
        {options.map((o) => (
          <MuiRadio
            key={o.value}
            checked={active === o.value}
            disabled={o.disabled}
            color={color}
            onChange={() => {
              setInternal(o.value)
              onChange?.(o.value)
            }}
          >
            {o.label}
          </MuiRadio>
        ))}
      </div>
    </div>
  )
}

export { MuiRadioGroup }
export type { MuiRadioGroupProps }
