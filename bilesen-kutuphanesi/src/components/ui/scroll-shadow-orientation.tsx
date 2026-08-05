/**
 * ScrollShadowOrientation
 * Yön örneği: dikey/yatay (saf React).
 * @id 597
 * @category Genel
 * @subcategory ScrollShadow
 */
import { ScrollShadow } from "@/components/ui/scroll-shadow"

function ScrollShadowOrientation() {
  return (
    <div className="flex flex-col gap-6">
      <ScrollShadow className="h-32 w-64 rounded-lg border border-border p-3">
        <div className="w-40 space-y-2 text-sm text-muted-foreground">
          {Array.from({ length: 8 }, (_, i) => <p key={i}>Vertical content line {i + 1}</p>)}
        </div>
      </ScrollShadow>
      <ScrollShadow orientation="horizontal" className="w-64 rounded-lg border border-border p-3">
        <div className="flex w-[480px] gap-3 text-sm text-muted-foreground">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="shrink-0 rounded-md bg-muted px-3 py-2">Item {i + 1}</span>
          ))}
        </div>
      </ScrollShadow>
    </div>
  )
}

export { ScrollShadowOrientation }
