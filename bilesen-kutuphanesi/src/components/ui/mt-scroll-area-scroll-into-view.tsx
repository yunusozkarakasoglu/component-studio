/**
 * MtScrollAreaScrollIntoView
 * Öğeye kaydır (saf React, Mantine kaynaklı).
 * @id 1779
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { useRef } from "react"
import { MtScrollArea, type MtScrollAreaRef } from "@/components/ui/mt-scroll-area"

function MtScrollAreaScrollIntoView() {
  const ref = useRef<MtScrollAreaRef>(null)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button onClick={() => ref.current?.scrollTo(300)} className="cursor-pointer rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">300px'e kaydır</button>
        <button onClick={() => ref.current?.scrollTo(0)} className="cursor-pointer rounded-md bg-muted px-3 py-1.5 text-xs font-medium hover:bg-muted/70">Başa dön</button>
      </div>
      <MtScrollArea ref={ref} h={160} className="w-72 rounded-lg border border-border bg-muted/20 p-3">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-2 text-sm text-foreground">Satır {i + 1}</p>
        ))}
      </MtScrollArea>
    </div>
  )
}

export { MtScrollAreaScrollIntoView }
