/**
 * ScrollShadowShadowSize
 * Gölge boyutu örneği: sm/md/lg (saf React).
 * @id 598
 * @category Genel
 * @subcategory ScrollShadow
 */
import { ScrollShadow } from "@/components/ui/scroll-shadow"

const TEXT = Array.from({ length: 15 }, (_, i) => `Satır ${i + 1}: kaydırılabilir içerik.`)

function ScrollShadowShadowSize() {
  return (
    <div className="flex gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <ScrollShadow key={size} className="h-40 w-40 rounded-lg border border-border p-3" shadowSize={size}>
          <div className="space-y-2 text-sm text-muted-foreground">
            {TEXT.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </ScrollShadow>
      ))}
    </div>
  )
}

export { ScrollShadowShadowSize }
