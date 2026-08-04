/**
 * ColorField
 * HeroUI color-field'ten uyarlanmış — saf React (bağımlılıksız).
 * Hex renk input'u + önizleme swatch'ı + geçerlilik kontrolü.
 *   <ColorField defaultValue="#0485F7" label="Color" onChange={setColor} />
 * @id 229
 * @category Colors
 * @subcategory ColorField
 */
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Color, parseColor } from "./color"
import { ColorSwatch } from "./color-swatch"

function ColorField({
  value,
  defaultValue,
  onChange,
  label,
  description,
  fullWidth,
  isDisabled,
  name,
  className,
}: {
  value?: string | null
  defaultValue?: string
  onChange?: (color: Color | null) => void
  label?: string
  description?: string
  fullWidth?: boolean
  isDisabled?: boolean
  name?: string
  className?: string
}) {
  const [internal, setInternal] = useState<string | null>(defaultValue ?? null)
  const [text, setText] = useState<string>(defaultValue ?? "")
  const controlled = value !== undefined
  const current = controlled ? value : internal

  const commit = (txt: string) => {
    setText(txt)
    try {
      const c = parseColor(txt)
      if (!controlled) setInternal(c.toString("hex"))
      onChange?.(c)
    } catch {
      /* geçersiz — bekle */
    }
  }

  const valid = (() => {
    try { parseColor(text); return true } catch { return false }
  })()

  return (
    <div data-slot="color-field" className={cn("flex flex-col gap-1.5", fullWidth && "w-full", isDisabled && "opacity-60", className)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 transition-colors focus-within:border-black/50">
        <ColorSwatch color={current ?? "#000000"} size="sm" aria-label="Renk önizleme" />
        <input
          type="text"
          name={name}
          value={text}
          onChange={(e) => commit(e.target.value)}
          disabled={isDisabled}
          spellCheck={false}
          placeholder="#0485F7"
          aria-invalid={!valid || undefined}
          className={cn("h-10 min-w-0 flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground/50", !valid && "text-red-600")}
        />
      </div>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

export { ColorField }
