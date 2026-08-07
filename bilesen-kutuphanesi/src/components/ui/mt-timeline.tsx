/**
 * MtTimeline
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Zaman çizelgesi — active, bulletSize, align, lineWidth.
 *   <MtTimeline active={1}>
 *     <MtTimelineItem title="Step 1">…</MtTimelineItem>
 *   </MtTimeline>
 * @id 1391
 * @category Navigasyon
 * @subcategory MtTimeline
 * @source mantine
 */
import { createContext, useContext, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Check } from "@/components/ui/icons"

const TimelineContext = createContext<{ active: number; bulletSize: number } | null>(null)

interface MtTimelineProps {
  active?: number
  bulletSize?: number
  lineWidth?: number
  color?: string
  align?: "left" | "right" | "center"
  children?: ReactNode
  className?: string
}

function MtTimeline({ active = -1, bulletSize = 20, align = "left", children, className }: MtTimelineProps) {
  return (
    <TimelineContext.Provider value={{ active, bulletSize }}>
      <div data-slot="mt-timeline" className={cn("flex flex-col gap-0", align === "right" && "items-end", align === "center" && "items-center", className)}>
        {children}
      </div>
    </TimelineContext.Provider>
  )
}

interface MtTimelineItemProps {
  title?: ReactNode
  bullet?: ReactNode
  children?: ReactNode
  lineActive?: boolean
  className?: string
}

function MtTimelineItem({ title, bullet, children, lineActive, className }: MtTimelineItemProps) {
  const ctx = useContext(TimelineContext)!
  const isActive = ctx.active >= 0 && lineActive

  return (
    <div data-slot="mt-timeline-item" className={cn("flex gap-3", className)}>
      <div className="flex flex-col items-center">
        <span
          className="flex shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground"
          style={{ width: ctx.bulletSize, height: ctx.bulletSize }}
        >
          {bullet ?? <Check className="size-3" />}
        </span>
        <span className={cn("w-px flex-1 bg-border", isActive && "bg-blue-600")} style={{ minHeight: 24 }} />
      </div>
      <div className="pb-6">
        {title && <p className="text-sm font-medium text-foreground">{title}</p>}
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

export { MtTimeline, MtTimelineItem }
export type { MtTimelineItemProps, MtTimelineProps }
