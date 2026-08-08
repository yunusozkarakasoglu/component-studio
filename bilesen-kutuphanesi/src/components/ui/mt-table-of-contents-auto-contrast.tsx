/**
 * MtTableOfContentsAutoContrast
 * Otomatik kontrast (saf React, Mantine kaynaklı).
 * @id 1834
 * @category Özel Komponentler
 * @subcategory MtTableOfContents
 * @source mantine
 */
import { useRef } from "react"
import { MtTableOfContents } from "@/components/ui/mt-table-of-contents"

function MtTableOfContentsAutoContrast() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full gap-4">
      <div ref={ref} className="w-40 shrink-0 rounded-lg border border-border bg-muted/30 p-2">
        <MtTableOfContents contentRef={ref} />
      </div>
      <div className="min-w-0 flex-1 space-y-2 text-sm text-foreground">
        <h2 id="neden">Neden saf React?</h2>
        <p>Bağımlılık yok, tam kontrol.</p>
        <h2 id="nasil">Nasıl çalışır?</h2>
        <p>JSDoc + registry tabanlı.</p>
      </div>
    </div>
  )
}

export { MtTableOfContentsAutoContrast }
