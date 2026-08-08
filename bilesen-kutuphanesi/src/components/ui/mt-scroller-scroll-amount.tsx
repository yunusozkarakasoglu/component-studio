/**
 * MtScrollerScrollAmount
 * Kaydırma miktarı (saf React, Mantine kaynaklı).
 * @id 1789
 * @category Özel Komponentler
 * @subcategory MtScroller
 * @source mantine
 */
import { MtScroller } from "@/components/ui/mt-scroller"

function MtScrollerScrollAmount() {
  return (
    <MtScroller h={180} scrollAmount={40} className="w-60">
      <div className="space-y-2 p-1">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground">Öğe {i + 1}</div>
        ))}
      </div>
    </MtScroller>
  )
}

export { MtScrollerScrollAmount }
