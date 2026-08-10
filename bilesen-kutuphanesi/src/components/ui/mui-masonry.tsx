/**
 * MuiMasonry
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Duvar düzeni — farklı yükseklikteki öğeler akıcı sütunlarda.
 *   <MuiMasonry items={[{content, height?}]} />
 * items · columns (sütun sayısı) · spacing
 * @id 2034
 * @category Veri Gösterimi
 * @subcategory MuiMasonry
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiMasonryItem {
  content: ReactNode
  height?: number
  color?: string
}

interface MuiMasonryProps {
  items?: MuiMasonryItem[]
  columns?: number
  spacing?: number
  className?: string
}

function MuiMasonry({
  items = [
    { content: "Kısa", height: 80 },
    { content: "Uzun içerik", height: 160 },
    { content: "Orta", height: 110 },
    { content: "Çok uzun", height: 200 },
    { content: "Küçük", height: 70 },
    { content: "Orta uzun", height: 140 },
  ],
  columns = 3,
  spacing = 8,
  className,
}: MuiMasonryProps) {
  // Sütun doldurma: öğeleri sütunlara dağıt (her sütuna en kısa ekle)
  const cols: MuiMasonryItem[][] = Array.from({ length: columns }, () => [])
  const heights = Array.from({ length: columns }, () => 0)
  for (const item of items) {
    const target = heights.indexOf(Math.min(...heights))
    cols[target].push(item)
    heights[target] += (item.height ?? 100) + spacing
  }
  return (
    <div className={cn("flex w-full items-start", className)} style={{ gap: `${spacing}px` }}>
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-1 flex-col" style={{ gap: `${spacing}px` }}>
          {col.map((item, i) => (
            <div
              key={i}
              className="flex w-full items-center justify-center rounded-md bg-gradient-to-br from-gray-200 to-gray-300 text-center text-xs font-medium text-gray-600"
              style={{ height: `${item.height ?? 100}px` }}
            >
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export { MuiMasonry }
export type { MuiMasonryProps, MuiMasonryItem }
