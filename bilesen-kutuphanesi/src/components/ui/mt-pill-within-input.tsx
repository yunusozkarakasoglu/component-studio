/**
 * MtPillWithinInput
 * Girdi içinde hap (saf React, Mantine kaynaklı).
 * @id 1495
 * @category Veri Gösterimi
 * @subcategory MtPill
 * @source mantine
 */
import { useState } from "react"
import { MtPill } from "@/components/ui/mt-pill"

const initial = ["React", "TypeScript", "Tailwind"]

function MtPillWithinInput() {
  const [pills, setPills] = useState(initial)

  return (
    <div className="flex max-w-sm flex-wrap items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-2 focus-within:border-blue-500">
      {pills.map((p) => (
        <MtPill key={p} withRemoveButton onRemove={() => setPills((x) => x.filter((i) => i !== p))}>
          {p}
        </MtPill>
      ))}
      <input
        placeholder="Add skills…"
        className="min-w-20 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  )
}

export { MtPillWithinInput }
