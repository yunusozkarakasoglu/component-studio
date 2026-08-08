/**
 * MtScrollAreaStylesApi
 * Stil API (saf React, Mantine kaynaklı).
 * @id 1783
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaStylesApi() {
  return (
    <MtScrollArea h={150} className="w-72 rounded-xl border border-blue-200 bg-blue-50/50 p-3">
      {Array.from({ length: 16 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Stilize alan — satır {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaStylesApi }
