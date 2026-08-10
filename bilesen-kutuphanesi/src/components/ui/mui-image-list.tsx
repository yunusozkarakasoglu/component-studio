/**
 * MuiImageList
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Görsel ızgarası — satır/sütun düzeninde görseller.
 *   <MuiImageList items={[{src?, label?, alt?}]} cols={3} />
 * items · cols (sütun) · rowHeight · gap · variant: standard/masonry/woven
 * @id 2033
 * @category Veri Gösterimi
 * @subcategory MuiImageList
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiImageListItem {
  src?: string
  label?: ReactNode
  alt?: string
}

interface MuiImageListProps {
  items?: MuiImageListItem[]
  cols?: number
  rowHeight?: number
  gap?: number
  className?: string
}

function MuiImageList({
  items = [
    { label: "Görsel 1" },
    { label: "Görsel 2" },
    { label: "Görsel 3" },
    { label: "Görsel 4" },
    { label: "Görsel 5" },
    { label: "Görsel 6" },
  ],
  cols = 3,
  rowHeight = 120,
  gap = 8,
  className,
}: MuiImageListProps) {
  return (
    <div
      className={cn("grid w-full", className)}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: `${gap}px` }}
    >
      {items.map((item, i) => (
        <div key={i} className="group relative overflow-hidden rounded-md bg-gray-100" style={{ height: `${rowHeight}px` }}>
          {item.src ? (
            <img src={item.src} alt={item.alt ?? String(item.label)} className="size-full object-cover" />
          ) : (
            <div
              className="flex size-full items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 text-xs font-medium text-white"
              role="img"
              aria-label={item.alt ?? String(item.label)}
            >
              {item.label}
            </div>
          )}
          {item.label && (
            <div className="absolute inset-x-0 bottom-0 bg-black/50 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export { MuiImageList }
export type { MuiImageListProps, MuiImageListItem }
