/**
 * MtScrollAreaBoundaries
 * Sınırlar (saf React, Mantine kaynaklı).
 * @id 1775
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaBoundaries() {
  return (
    <MtScrollArea h={160} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
      {Array.from({ length: 15 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Sınırlı içerik — satır {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaBoundaries }
