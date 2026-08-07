/**
 * MtPillsInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Etiket (pill) girişi — value array, onRemove, placeholder.
 *   <MtPillsInput defaultValue={["React", "Vue"]} />
 * @id 1261
 * @category Seçim
 * @subcategory MtPillsInput
 * @source mantine
 */
import { useState, type KeyboardEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtPillsInputProps {
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  label?: ReactNode
  className?: string
}

function MtPillsInput({
  value,
  defaultValue = [],
  onChange,
  placeholder = "Type and press Enter",
  disabled,
  loading,
  label,
  className,
}: MtPillsInputProps) {
  const [internal, setInternal] = useState(defaultValue)
  const [input, setInput] = useState("")
  const values = value !== undefined ? value : internal

  const set = (v: string[]) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const addPill = () => {
    const trimmed = input.trim()
    if (trimmed && !values.includes(trimmed)) set([...values, trimmed])
    setInput("")
  }

  const removePill = (pill: string) => set(values.filter((v) => v !== pill))

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addPill()
    } else if (e.key === "Backspace" && !input && values.length > 0) {
      removePill(values[values.length - 1])
    }
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <div
        data-slot="mt-pills-input"
        className={cn(
          "flex min-h-9 w-full flex-wrap items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1.5 transition-colors",
          "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30",
          (disabled || loading) && "pointer-events-none opacity-50"
        )}
      >
        {values.map((pill) => (
          <span key={pill} className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-2 py-0.5 text-sm">
            {pill}
            <button
              type="button"
              aria-label={`Remove ${pill}`}
              disabled={disabled}
              onClick={() => removePill(pill)}
              className="cursor-pointer text-muted-foreground hover:text-foreground"
            >
              <X className="size-3" />
            </button>
          </span>
        ))}
        <input
          value={input}
          disabled={disabled || loading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addPill}
          placeholder={values.length === 0 ? placeholder : ""}
          className="min-w-24 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
    </div>
  )
}

export { MtPillsInput }
export type { MtPillsInputProps }
