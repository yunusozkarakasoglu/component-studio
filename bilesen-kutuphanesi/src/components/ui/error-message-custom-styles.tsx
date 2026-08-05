/**
 * ErrorMessageCustomStyles
 * Özelleştirilmiş hata mesajı örneği (saf React).
 * @id 377
 * @category Form Elemanları
 * @subcategory ErrorMessage
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { ErrorMessage } from "@/components/ui/error-message"
import { Label } from "@/components/ui/label"

const TOPICS = ["API", "Design", "Docs"]

function ErrorMessageCustomStyles() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const isInvalid = selected.size === 0

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label>Topics</Label>
      <div className="flex flex-wrap gap-2">
        {TOPICS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() =>
              setSelected((prev) => {
                const next = new Set(prev)
                if (next.has(t)) next.delete(t)
                else next.add(t)
                return next
              })
            }
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              selected.has(t)
                ? "border-red-400 bg-red-500/10 text-red-600"
                : "border-border bg-background text-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <Description>Pick at least one topic</Description>
      <ErrorMessage className="font-medium text-red-500">
        {!!isInvalid && <span>Choose at least one topic</span>}
      </ErrorMessage>
    </div>
  )
}

export { ErrorMessageCustomStyles }
