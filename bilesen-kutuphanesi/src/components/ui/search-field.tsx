/**
 * SearchField
 * Arama alanı — ikon + temizleme butonu (saf React, kendi setimizden ikonlar).
 * @id 137
 * @category Form Elemanları
 */
import { useState, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Search, X } from "@/components/ui/icons"

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (v: string) => void
}

function SearchField({ value, onChange, className, ...props }: SearchFieldProps) {
  const [internal, setInternal] = useState("")
  const val = value ?? internal
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={val}
        onChange={(e) => {
          setInternal(e.target.value)
          onChange?.(e.target.value)
        }}
        className="h-10 w-full rounded-lg border border-border bg-background pr-9 pl-9 text-sm outline-none transition-colors focus:border-black/50 focus-visible:ring-3 focus-visible:ring-ring/50"
        {...props}
      />
      {val ? (
        <button
          type="button"
          aria-label="Temizle"
          onClick={() => {
            setInternal("")
            onChange?.("")
          }}
          className="absolute top-1/2 right-2.5 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      ) : null}
    </div>
  )
}

export { SearchField }
export type { SearchFieldProps }
