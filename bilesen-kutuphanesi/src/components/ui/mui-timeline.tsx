/**
 * MuiTimeline
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Zaman çizelgesi — kronolojik olay listesi.
 *   <MuiTimeline items={[{title, description?, icon?}]} />
 * items: {title, description?, icon?, time?}[] · position: left/right/alternate
 * @id 1998
 * @category Navigasyon
 * @subcategory MuiTimeline
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle } from "@/components/ui/icons"

interface MuiTimelineItem {
  title: ReactNode
  description?: ReactNode
  time?: ReactNode
  icon?: ReactNode
}

interface MuiTimelineProps {
  items?: MuiTimelineItem[]
  className?: string
}

function MuiTimeline({ items = [{ title: "Olay 1", description: "Açıklama" }], className }: MuiTimelineProps) {
  return (
    <ol className={cn("relative ml-3 border-l-2 border-gray-200 pl-6", className)}>
      {items.map((item, i) => (
        <li key={i} className="relative pb-6 last:pb-0">
          <span className="absolute -left-[31px] flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
            {item.icon ?? <CheckCircle className="size-3.5" />}
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              {item.time && <span className="text-xs text-gray-400">{item.time}</span>}
            </div>
            {item.description && <p className="mt-0.5 text-xs text-gray-500">{item.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

export { MuiTimeline }
export type { MuiTimelineProps, MuiTimelineItem }
