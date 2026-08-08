/**
 * MtScrollAreaAutosizePopover
 * Otomatik boyut (saf React, Mantine kaynaklı).
 * @id 1785
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaAutosizePopover() {
  return (
    <div className="flex w-72 flex-col gap-2">
      <p className="text-xs text-muted-foreground">İçerik boyutuna göre büyüyen alan</p>
      <MtScrollArea className="rounded-lg border border-border bg-muted/20 p-3">
        {Array.from({ length: 5 }, (_, i) => (
          <p key={i} className="mb-1.5 text-sm text-foreground">Kısa içerik — satır {i + 1}</p>
        ))}
      </MtScrollArea>
    </div>
  )
}

export { MtScrollAreaAutosizePopover }
