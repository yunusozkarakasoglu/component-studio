/**
 * ScrollShadowHideScrollBar
 * Kaydırma çubuğu gizli örnek (saf React).
 * @id 600
 * @category Genel
 * @subcategory ScrollShadow
 */
import { ScrollShadow } from "@/components/ui/scroll-shadow"

const TEXT = Array.from({ length: 15 }, (_, i) => `Paragraf ${i + 1}: gizli kaydırma çubuğu ile içerik.`)

function ScrollShadowHideScrollBar() {
  return (
    <ScrollShadow hideScrollBar className="h-40 w-64 rounded-lg border border-border p-3">
      <div className="space-y-2 text-sm text-muted-foreground">
        {TEXT.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </ScrollShadow>
  )
}

export { ScrollShadowHideScrollBar }
