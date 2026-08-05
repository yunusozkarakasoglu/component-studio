/**
 * ScrollShadowBasic
 * Temel örnek: dikey kaydırma gölgeleri (saf React).
 * @id 596
 * @category Genel
 * @subcategory ScrollShadow
 */
import { ScrollShadow } from "@/components/ui/scroll-shadow"

const TEXT = Array.from({ length: 20 }, (_, i) => `Paragraf ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`)

function ScrollShadowBasic() {
  return (
    <ScrollShadow className="h-48 w-72 rounded-lg border border-border p-3">
      <div className="space-y-3 text-sm text-muted-foreground">
        {TEXT.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </ScrollShadow>
  )
}

export { ScrollShadowBasic }
