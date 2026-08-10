/**
 * useVirtualGrid — bağımlılıksız sanal ızgara (virtual grid) hook'u.
 *
 * Sabit yükseklikli kartlardan oluşan responsive grid'lerde yalnızca görünür
// alanı (+ tampon) render ederek DOM düğüm sayısını büyük ölçüde azaltır.
 *
 * - Saf React, üçüncü parti paket YOK.
 * - Kolon sayısı container genişliğine göre otomatik hesaplanır (resize observer).
 * - Kart yüksekliği sabit kabul edilir (itemHeight).
 *
 * Kullanım:
 *   const { containerRef, innerRef, totalHeight, startIndex, endIndex, colCount } =
 *     useVirtualGrid({ itemCount: filtered.length, itemHeight: 145, gap: 12 })
 *
 *   <div ref={containerRef} className="overflow-y-auto">
 *     <div ref={innerRef} style={{ height: totalHeight, position: "relative" }}>
 *       <div className="grid grid-cols-..." style={{ transform: `translateY(${startIndex*rowHeight}px)` }}>
 *         {filtered.slice(startIndex, endIndex).map(...)}
 *       </div>
 *     </div>
 *   </div>
 */
import { useCallback, useRef, useState } from "react"

interface Options {
  /** Toplam öğe sayısı */
  itemCount: number
  /** Tek bir kartın yüksekliği (px) — sabit kabul edilir */
  itemHeight: number
  /** Kartlar arası dikey/yatay boşluk (px) */
  gap?: number
  /** Görünür alanın üstünde/altında ek render edilecek tampon satır sayısı */
  overscanRows?: number
  /** Minimum kolon genişliği (px) — containerWidth / colMinWidth → kolon sayısı */
  colMinWidth?: number
}

interface Result {
  /** Scroll yapan container'a bağlanacak ref (callback) */
  containerRef: (node: HTMLDivElement | null) => void
  /** İçerik yüksekliğini tutan (position: relative) iç container ref'i */
  innerRef: React.RefObject<HTMLDivElement | null>
  /** İç container'ın toplam yüksekliği (px) — scroll bar doğru olur */
  totalHeight: number
  /** Görünecek ilk öğenin index'i */
  startIndex: number
  /** Görünecek son öğenin index'i (dahil değil) */
  endIndex: number
  /** Hesaplanan kolon sayısı */
  colCount: number
  /** Bir satırın toplam yüksekliği (itemHeight + gap) */
  rowHeight: number
}

export function useVirtualGrid({
  itemCount,
  itemHeight,
  gap = 12,
  overscanRows = 4,
  colMinWidth = 240,
}: Options): Result {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [viewportH, setViewportH] = useState(600)
  const [containerW, setContainerW] = useState(1200)
  const [colCount, setColCount] = useState(5)

  const rowHeight = itemHeight + gap

  // Kolon sayısı: container genişliğine göre (minimum genişlik baz alınır)
  const recomputeCols = useCallback(
    (width: number) => {
      const cols = Math.max(1, Math.floor((width + gap) / (colMinWidth + gap)))
      setColCount((prev) => (prev === cols ? prev : cols))
    },
    [colMinWidth, gap]
  )

  // Container'a bağlanma: ref set edildiğinde hem boyut ölçümü hem scroll listener kurulur
  const setContainerRef = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node
    if (!node) return
    // Boyut ölçümü
    const w = node.clientWidth
    const h = node.clientHeight
    setContainerW((prev) => (prev === w ? prev : w))
    setViewportH((prev) => (prev === h ? prev : h))
    recomputeCols(w)
    // Scroll pozisyonunu senkronize et
    setScrollTop(node.scrollTop)
    // Scroll listener (pasif)
    if (!node.dataset.vgBound) {
      node.dataset.vgBound = "1"
      node.addEventListener("scroll", () => setScrollTop(node.scrollTop), { passive: true })
    }
    // Boyut değişimi izle
    if (!node.dataset.vgResize) {
      node.dataset.vgResize = "1"
      const ro = new ResizeObserver(() => {
        const w2 = node.clientWidth
        const h2 = node.clientHeight
        setContainerW((prev) => (prev === w2 ? prev : w2))
        setViewportH((prev) => (prev === h2 ? prev : h2))
        recomputeCols(w2)
      })
      ro.observe(node)
      ;(node as HTMLDivElement & { __vgRO?: ResizeObserver }).__vgRO = ro
    }
  }, [recomputeCols])

  // Toplam satır/yükseklik
  const rowCount = Math.ceil(itemCount / colCount)
  const totalHeight = rowCount * rowHeight

  // Görünür satır aralığı (+ tampon)
  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - overscanRows)
  const visibleRows = Math.ceil(viewportH / rowHeight) + overscanRows * 2
  const endRow = startRow + visibleRows

  const startIndex = startRow * colCount
  const endIndex = Math.min(itemCount, endRow * colCount)

  return {
    containerRef: setContainerRef,
    innerRef,
    innerRef,
    totalHeight,
    startIndex,
    endIndex,
    colCount,
    rowHeight,
  }
}
