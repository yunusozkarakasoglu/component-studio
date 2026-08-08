/**
 * MtScrollAreaScrollPosition
 * Konum takibi (saf React, Mantine kaynaklı).
 * @id 1780
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { useState } from "react"
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaScrollPosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">Konum: x={pos.x}, y={pos.y}</p>
      <MtScrollArea h={150} className="w-72 rounded-lg border border-border bg-muted/20 p-3" onScroll={(p) => setPos(p)}>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-2 text-sm text-foreground">Satır {i + 1}</p>
        ))}
      </MtScrollArea>
    </div>
  )
}

export { MtScrollAreaScrollPosition }
