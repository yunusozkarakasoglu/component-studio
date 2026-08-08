/**
 * MtTextLinesConfigurator
 * Satır yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1484
 * @category Veri Gösterimi
 * @subcategory MtText
 * @source mantine
 */
import { useState } from "react"
import { MtText } from "@/components/ui/mt-text"

const long = "Mantine components are built with accessibility in mind — keyboard navigation, ARIA attributes and screen reader support are included by default in every component."

function MtTextLinesConfigurator() {
  const [lines, setLines] = useState(2)

  return (
    <div className="flex max-w-md flex-col gap-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        Lines:
        {[1, 2, 3, 4].map((n) => (
          <button key={n} onClick={() => setLines(n)} className={`cursor-pointer rounded px-2 py-0.5 ${lines === n ? "bg-blue-600 text-white" : "bg-muted"}`}>{n}</button>
        ))}
      </div>
      <MtText lineClamp={lines}>{long}</MtText>
    </div>
  )
}

export { MtTextLinesConfigurator }
