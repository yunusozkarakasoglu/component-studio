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
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

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
  /** Scroll yapan container'a bağlanacak ref */
  containerRef: React.RefObject<HTMLDivElement | null>
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

  // Container boyutlarını izle (resize)
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      setContainerW((prev) => (prev === w ? prev : w))
      setViewportH((prev) => (prev === h ? prev : h))
      recomputeCols(w)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [recomputeCols])

  // Scroll pozisyonunu izle (pasif, rAF ile throttle)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setScrollTop(el.scrollTop)
      })
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      el.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

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
    containerRef,
    innerRef,
    totalHeight,
    startIndex,
    endIndex,
    colCount,
    rowHeight,
  }
}
