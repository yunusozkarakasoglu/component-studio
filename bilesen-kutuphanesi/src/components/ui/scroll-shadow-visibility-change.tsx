/**
 * ScrollShadowVisibilityChange
 * Görünürlük değişimi örneği — üst/alt gölge durumu (saf React).
 * @id 601
 * @category Genel
 * @subcategory ScrollShadow
 */
import { useState } from "react"
import { ScrollShadow } from "@/components/ui/scroll-shadow"

const TEXT = Array.from({ length: 15 }, (_, i) => `Satır ${i + 1}: gölge durumunu izleyin.`)

function ScrollShadowVisibilityChange() {
  const [state, setState] = useState({ top: false, bottom: false })

  return (
    <div className="flex w-64 flex-col gap-2">
      <ScrollShadow className="h-40 rounded-lg border border-border p-3" onVisibilityChange={setState}>
        <div className="space-y-2 text-sm text-muted-foreground">
          {TEXT.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </ScrollShadow>
      <p className="text-xs text-muted-foreground">
        Üst gölge: {state.top ? "görünür" : "gizli"} · Alt gölge: {state.bottom ? "görünür" : "gizli"}
      </p>
    </div>
  )
}

export { ScrollShadowVisibilityChange }
