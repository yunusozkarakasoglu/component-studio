/**
 * MtTableOfContentsDepthOffset
 * Derinlik ofseti (saf React, Mantine kaynaklı).
 * @id 1835
 * @category Özel Komponentler
 * @subcategory MtTableOfContents
 * @source mantine
 */
import { useRef } from "react"
import { MtTableOfContents } from "@/components/ui/mt-table-of-contents"

function MtTableOfContentsDepthOffset() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full gap-4">
      <div ref={ref} className="w-44 shrink-0 rounded-lg border border-border bg-muted/30 p-2">
        <MtTableOfContents contentRef={ref} depth={3} />
      </div>
      <div className="min-w-0 flex-1 space-y-2 text-sm text-foreground">
        <h2 id="a">Bölüm A</h2>
        <p>İçerik A</p>
        <h3 id="a1">Alt Bölüm A1</h3>
        <p>İçerik A1</p>
        <h4 id="a1x">Derin A1X</h4>
        <p>Derin içerik (h4 — depth 3'te gizli).</p>
        <h2 id="b">Bölüm B</h2>
        <p>İçerik B</p>
      </div>
    </div>
  )
}

export { MtTableOfContentsDepthOffset }
