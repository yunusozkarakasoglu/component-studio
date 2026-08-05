/**
 * ScrollShadowWithCard
 * Kart içinde örnek (saf React).
 * @id 599
 * @category Genel
 * @subcategory ScrollShadow
 */
import { ScrollShadow } from "@/components/ui/scroll-shadow"

function ScrollShadowWithCard() {
  return (
    <div className="w-72 rounded-xl border border-border bg-background shadow-sm">
      <div className="border-b border-border px-4 py-3 text-sm font-semibold text-foreground">Activity feed</div>
      <ScrollShadow className="h-48">
        <div className="space-y-1 p-2 text-sm text-muted-foreground">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-muted/50">
              <span className="size-2 rounded-full bg-blue-500" />
              Event {i + 1} — some activity happened
            </div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  )
}

export { ScrollShadowWithCard }
