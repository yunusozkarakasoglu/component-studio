/**
 * MtScrollAreaScrollTo
 * Noktaya kaydır (saf React, Mantine kaynaklı).
 * @id 1781
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { useRef } from "react"
import { MtScrollArea, type MtScrollAreaRef } from "@/components/ui/mt-scroll-area"

function MtScrollAreaScrollTo() {
  const ref = useRef<MtScrollAreaRef>(null)

  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => ref.current?.scrollBy(0, 100)} className="w-fit cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">+100px</button>
      <MtScrollArea ref={ref} h={160} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-2 text-sm text-foreground">Satır {i + 1}</p>
        ))}
      </MtScrollArea>
    </div>
  )
}

export { MtScrollAreaScrollTo }
