/**
 * MtHighlightConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1578
 * @category Alert & Dialog
 * @subcategory MtHighlight
 * @source mantine
 */
import { useState } from "react"
import { MtHighlight } from "@/components/ui/mt-highlight"

function MtHighlightConfigurator() {
  const [term, setTerm] = useState("React")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Vurgulanacak terim"
        className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
      <MtHighlight highlight={term}>
        React, TypeScript ve Tailwind ile modern arayüzler inşa ediyoruz.
      </MtHighlight>
    </div>
  )
}

export { MtHighlightConfigurator }
