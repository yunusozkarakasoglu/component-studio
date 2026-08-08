/**
 * MtScrollAreaHorizontal
 * Yatay (saf React, Mantine kaynaklı).
 * @id 1776
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaHorizontal() {
  return (
    <MtScrollArea w={280} className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="flex w-max gap-2">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="flex h-16 w-24 items-center justify-center rounded-lg bg-blue-100 text-xs font-medium text-blue-700">Sütun {i + 1}</div>
        ))}
      </div>
    </MtScrollArea>
  )
}

export { MtScrollAreaHorizontal }
