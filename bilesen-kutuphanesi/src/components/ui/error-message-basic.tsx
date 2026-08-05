/**
 * ErrorMessageBasic
 * Temel örnek: koşullu hata mesajı (saf React).
 * Seçim boşken hata gösterilir (TagGroup benzeri senaryo, basit simülasyon).
 * @id 376
 * @category Form Elemanları
 * @subcategory ErrorMessage
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { ErrorMessage } from "@/components/ui/error-message"
import { Label } from "@/components/ui/label"

const CATEGORIES = ["News", "Travel", "Gaming", "Shopping"]

function ErrorMessageBasic() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const isInvalid = selected.size === 0

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label>Required Categories</Label>
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() =>
              setSelected((prev) => {
                const next = new Set(prev)
                if (next.has(c)) next.delete(c)
                else next.add(c)
                return next
              })
            }
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              selected.has(c)
                ? "border-blue-500 bg-blue-500/10 text-blue-600"
                : "border-border bg-background text-foreground hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <Description>Select at least one category</Description>
      <ErrorMessage>{!!isInvalid && <span>Please select at least one category</span>}</ErrorMessage>
    </div>
  )
}

export { ErrorMessageBasic }
