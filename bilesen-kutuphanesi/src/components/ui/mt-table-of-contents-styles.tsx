/**
 * MtTableOfContentsStyles
 * Stiller (saf React, Mantine kaynaklı).
 * @id 1836
 * @category Özel Komponentler
 * @subcategory MtTableOfContents
 * @source mantine
 */
import { useRef } from "react"
import { MtTableOfContents } from "@/components/ui/mt-table-of-contents"

function MtTableOfContentsStyles() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full gap-4">
      <div ref={ref} className="w-40 shrink-0 rounded-lg border border-border bg-muted/30 p-2">
        <MtTableOfContents contentRef={ref} className="gap-1" />
      </div>
      <div className="min-w-0 flex-1 space-y-2 text-sm text-foreground">
        <h2 id="baslik1">Başlık 1</h2>
        <p>İçerik</p>
        <h2 id="baslik2">Başlık 2</h2>
        <p>İçerik</p>
        <h2 id="baslik3">Başlık 3</h2>
        <p>İçerik</p>
      </div>
    </div>
  )
}

export { MtTableOfContentsStyles }
