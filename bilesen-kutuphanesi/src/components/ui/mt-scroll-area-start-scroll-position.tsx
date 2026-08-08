/**
 * MtScrollAreaStartScrollPosition
 * Başlangıç konumu (saf React, Mantine kaynaklı).
 * @id 1782
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaStartScrollPosition() {
  return (
    <MtScrollArea h={160} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Başlangıçta en üst — satır {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaStartScrollPosition }
