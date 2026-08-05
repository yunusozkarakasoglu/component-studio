/**
 * ScrollShadow
 * Saf React bileşen (bağımlılıksız).
 * Kaydırılabilir alan + kenar gölgeleri (içerik taştığında görünür).
 *   <ScrollShadow className="h-64 w-64">
 *     …içerik…
 *   </ScrollShadow>
 * Özellikler: orientation (vertical/horizontal) · hideScrollBar ·
 * shadowSize (sm/md/lg) · visibility değişiminde onVisibilityChange.
 * @id 595
 * @category Genel
 * @subcategory ScrollShadow
 */
import { useRef, useState, type ReactNode, type UIEvent } from "react"
import { cn } from "@/lib/utils"

type ScrollShadowOrientation = "vertical" | "horizontal"
type ScrollShadowSize = "sm" | "md" | "lg"

interface ScrollShadowProps {
  children?: ReactNode
  className?: string
  orientation?: ScrollShadowOrientation
  hideScrollBar?: boolean
  shadowSize?: ScrollShadowSize
  onVisibilityChange?: (state: { top: boolean; bottom: boolean }) => void
}

const shadowSizeClass: Record<ScrollShadowSize, string> = {
  sm: "from-background",
  md: "from-background to-transparent",
  lg: "from-background via-background to-transparent",
}

function ScrollShadow({
  children,
  className,
  orientation = "vertical",
  hideScrollBar = false,
  shadowSize = "md",
  onVisibilityChange,
}: ScrollShadowProps) {
  const [top, setTop] = useState(false)
  const [bottom, setBottom] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const canScroll = el.scrollHeight > el.clientHeight
    const atTop = el.scrollTop <= 0
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1
    setTop(canScroll && !atTop)
    setBottom(canScroll && !atBottom)
    onVisibilityChange?.({ top: canScroll && !atTop, bottom: canScroll && !atBottom })
  }

  const vertical = orientation === "vertical"

  return (
    <div className={cn("relative", className)}>
      {vertical && top && (
        <div className={cn("pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-linear-to-b", shadowSizeClass[shadowSize])} />
      )}
      {!vertical && top && (
        <div className={cn("pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-linear-to-r", shadowSizeClass[shadowSize])} />
      )}
      <div
        ref={ref}
        data-slot="scroll-shadow"
        onScroll={handleScroll}
        className={cn(
          "overflow-auto",
          vertical ? "overflow-y-auto" : "overflow-x-auto",
          hideScrollBar && "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          className
        )}
      >
        {children}
      </div>
      {vertical && bottom && (
        <div className={cn("pointer-events-none absolute inset-x-0 bottom-0 z-10 h-6 rotate-180 bg-linear-to-b", shadowSizeClass[shadowSize])} />
      )}
      {!vertical && bottom && (
        <div className={cn("pointer-events-none absolute inset-y-0 right-0 z-10 w-6 rotate-180 bg-linear-to-r", shadowSizeClass[shadowSize])} />
      )}
    </div>
  )
}

export { ScrollShadow }
export type { ScrollShadowProps, ScrollShadowSize }
