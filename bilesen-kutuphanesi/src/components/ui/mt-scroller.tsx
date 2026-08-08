/**
 * MtScroller
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kaydırıcı — yön butonlarıyla içeriği kayan alan.
 *   <MtScroller direction="vertical">…</MtScroller>
 * @id 1767
 * @category Özel Komponentler
 * @subcategory MtScroller
 * @source mantine
 */
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "@/components/ui/icons"

interface MtScrollerProps {
  direction?: "vertical" | "horizontal"
  scrollAmount?: number
  h?: number
  w?: number
  className?: string
  children?: ReactNode
}

function MtScroller({ direction = "vertical", scrollAmount = 120, h, w, className, children }: MtScrollerProps) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    if (direction === "vertical") el.scrollBy({ top: dir * scrollAmount, behavior: "smooth" })
    else el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" })
  }

  return (
    <div className={cn("flex flex-col gap-1.5", direction === "horizontal" && "flex-col", className)}>
      <button
        type="button"
        aria-label="Yukarı"
        onClick={() => scroll(-1)}
        className="flex h-7 w-full cursor-pointer items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ChevronUp className="size-4" />
      </button>
      <div
        ref={ref}
        data-slot="mt-scroller"
        className={cn("overflow-auto", direction === "vertical" ? "max-h-full" : "max-w-full")}
        style={{ height: direction === "vertical" ? h : undefined, width: direction === "horizontal" ? w : undefined }}
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Aşağı"
        onClick={() => scroll(1)}
        className="flex h-7 w-full cursor-pointer items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ChevronDown className="size-4" />
      </button>
    </div>
  )
}

export { MtScroller }
export type { MtScrollerProps }
