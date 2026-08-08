/**
 * MtMarquee
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Akan şerit — içeriği yatay/dikey kaydırır, durdurma, çok satır.
 *   <MtMarquee speed={20} pauseOnHover>…</MtMarquee>
 * @id 1769
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtMarqueeProps {
  speed?: number
  direction?: "left" | "right" | "up" | "down"
  pauseOnHover?: boolean
  fadeEdges?: boolean
  reverse?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

function MtMarquee({ speed = 30, direction = "left", pauseOnHover, fadeEdges, reverse, className, style, children }: MtMarqueeProps) {
  const vertical = direction === "up" || direction === "down"
  const duration = Math.max(4, Math.round(100 / speed) * 2)

  return (
    <div
      data-slot="mt-marquee"
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-muted/30 p-3",
        vertical ? "h-64" : "w-full",
        fadeEdges && (vertical ? "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" : "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"),
        className
      )}
      style={style}
    >
      <div
        className={cn(
          "flex w-max gap-3",
          vertical ? "h-max animate-marquee-vertical flex-col" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

export { MtMarquee }
export type { MtMarqueeProps }
