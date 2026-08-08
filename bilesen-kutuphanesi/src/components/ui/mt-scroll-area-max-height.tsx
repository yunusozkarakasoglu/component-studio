/**
 * MtScrollAreaMaxHeight
 * Maksimum yükseklik (saf React, Mantine kaynaklı).
 * @id 1777
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaMaxHeight() {
  return (
    <MtScrollArea h={200} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
      {Array.from({ length: 25 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Uzun liste — öğe {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaMaxHeight }
