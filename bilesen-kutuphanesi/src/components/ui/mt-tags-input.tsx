/**
 * MtTagsInput
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Etiket girişi — öneri listesi + serbest etiket ekleme.
 *   <MtTagsInput data={["React", "Vue"]} label="Technologies" />
 * @id 1302
 * @category Combobox
 * @subcategory MtTagsInput
 * @source mantine
 */
import { useState, type KeyboardEvent, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { X } from "@/components/ui/icons"

interface MtTagsInputProps {
  data?: string[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  placeholder?: string
  disabled?: boolean
  className?: string
}

function MtTagsInput({
  data = [],
  value,
  defaultValue = [],
  onChange,
  label,
  description,
  error,
  placeholder = "Type and press Enter",
  disabled,
  className,
}: MtTagsInputProps) {
  const [internal, setInternal] = useState<string[]>(defaultValue)
  const [input, setInput] = useState("")
  const [focused, setFocused] = useState(false)
  const values = value !== undefined ? value : internal

  const suggestions = data.filter((d) => !values.includes(d) && (!input || d.toLowerCase().includes(input.toLowerCase())))

  const set = (v: string[]) => {
    if (value === undefined) setInternal(v)
    onChange?.(v)
  }

  const add = (tag: string) => {
    const t = tag.trim()
    if (t && !values.includes(t)) set([...values, t])
    setInput("")
  }

  const remove = (tag: string) => set(values.filter((v) => v !== tag))

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); add(input) }
    else if (e.key === "Backspace" && !input && values.length) remove(values[values.length - 1])
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
      <div className="relative">
        <div
          data-slot="mt-tags-input"
          className={cn(
            "flex min-h-9 w-full flex-wrap items-center gap-1 rounded-md border border-border bg-background px-2 py-1.5",
            "focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/30",
            (disabled) && "pointer-events-none opacity-50",
            error && "border-red-500"
          )}
        >
          {values.map((v) => (
            <span key={v} className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-2 py-0.5 text-sm">
              {v}
              <button type="button" aria-label={`Remove ${v}`} disabled={disabled} onClick={() => remove(v)} className="cursor-pointer text-muted-foreground hover:text-foreground">
                <X className="size-3" />
              </button>
            </span>
          ))}
          <input
            value={input}
            disabled={disabled}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder={values.length === 0 ? placeholder : ""}
            className="min-w-24 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        {focused && suggestions.length > 0 && (
          <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-background p-1 shadow-lg">
            <ul className="max-h-48 overflow-y-auto">
              {suggestions.map((s) => (
                <li key={s}>
                  <button type="button" onMouseDown={(e) => { e.preventDefault(); add(s) }} className="flex w-full cursor-pointer items-center gap-2 rounded px-2.5 py-1.5 text-left text-sm hover:bg-muted">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export { MtTagsInput }
export type { MtTagsInputProps }
