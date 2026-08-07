/**
 * ShadcnProgressControlled
 * Kontrollü ilerleme — butonlarla (saf React, shadcn kaynaklı).
 * @id 941
 * @category Yükleme & İlerleme
 * @subcategory ShadcnProgress
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnProgress } from "@/components/ui/shadcn-progress"

function ShadcnProgressControlled() {
  const [value, setValue] = useState(20)

  return (
    <div className="flex w-[60%] flex-col gap-3">
      <ShadcnProgress value={value} />
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setValue((v) => Math.max(0, v - 10))} className="rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:bg-muted">
          -10
        </button>
        <button type="button" onClick={() => setValue((v) => Math.min(100, v + 10))} className="rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:bg-muted">
          +10
        </button>
        <span className="ml-auto text-sm tabular-nums text-muted-foreground">{value}%</span>
      </div>
    </div>
  )
}

export { ShadcnProgressControlled }
