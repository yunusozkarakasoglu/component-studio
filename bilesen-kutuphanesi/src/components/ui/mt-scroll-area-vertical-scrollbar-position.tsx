/**
 * MtScrollAreaVerticalScrollbarPosition
 * Dikey çubuk konumu (saf React, Mantine kaynaklı).
 * @id 1784
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaVerticalScrollbarPosition() {
  return (
    <MtScrollArea h={150} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
      {Array.from({ length: 16 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Sağ çubuk — satır {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaVerticalScrollbarPosition }
