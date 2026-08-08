/**
 * MtTableOfContentsUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1837
 * @category Özel Komponentler
 * @subcategory MtTableOfContents
 * @source mantine
 */
import { useRef } from "react"
import { MtTableOfContents } from "@/components/ui/mt-table-of-contents"

function MtTableOfContentsUsage() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full gap-4">
      <div ref={ref} className="w-40 shrink-0 rounded-lg border border-border bg-muted/30 p-2">
        <MtTableOfContents contentRef={ref} />
      </div>
      <div className="min-w-0 flex-1 space-y-2 text-sm text-foreground">
        <h2 id="giris">Giriş</h2>
        <p>Bileşen kütüphanesi saf React ile yazılmıştır.</p>
        <h3 id="kurulum">Kurulum</h3>
        <p>Dosyaları kopyalayıp projenize ekleyin.</p>
        <h3 id="tema">Tema</h3>
        <p>Tailwind token'larıyla özelleştirin.</p>
        <h2 id="bilesenler">Bileşenler</h2>
        <p>90+ aile, 1700+ bileşen.</p>
      </div>
    </div>
  )
}

export { MtTableOfContentsUsage }
