/**
 * MtScrollArea
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Kaydırma alanı — yatay/dikey kaydırma çubukları, scrollTo/scrollToPosition API.
 *   <MtScrollArea ref={ref} h={200}>…</MtScrollArea>
 * @id 1766
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { forwardRef, useImperativeHandle, useRef, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface MtScrollAreaRef {
  scrollTo: (offset: number) => void
  scrollToPosition: (x: number, y: number) => void
  scrollBy: (x: number, y: number) => void
}

interface MtScrollAreaProps extends Omit<HTMLAttributes<HTMLDivElement>, "onScroll"> {
  h?: number | string
  w?: number | string
  type?: "auto" | "always" | "never" | "hover"
  offsetScrollbars?: boolean
  scrollbarSize?: number
  onScroll?: (position: { x: number; y: number }) => void
  children?: ReactNode
}

const MtScrollArea = forwardRef<MtScrollAreaRef, MtScrollAreaProps>(function MtScrollArea(
  { className, h, w, type = "auto", offsetScrollbars, scrollbarSize = 8, onScroll, children, ...props },
  ref
) {
  const innerRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    scrollTo: (offset: number) => {
      innerRef.current?.scrollTo({ top: offset })
    },
    scrollToPosition: (x: number, y: number) => {
      innerRef.current?.scrollTo({ left: x, top: y })
    },
    scrollBy: (x: number, y: number) => {
      innerRef.current?.scrollBy({ left: x, top: y })
    },
  }))

  return (
    <div
      ref={innerRef}
      data-slot="mt-scroll-area"
      className={cn(
        "overflow-auto",
        type === "never" && "scrollbar-none",
        type === "always" && "scrollbar-always",
        offsetScrollbars && "scroll-p-2",
        className
      )}
      style={{ height: h, width: w, scrollbarWidth: "thin", scrollbarColor: "rgba(100,116,139,0.5) transparent" }}
      onScroll={(e) => onScroll?.({ x: e.currentTarget.scrollLeft, y: e.currentTarget.scrollTop })}
      {...props}
    >
      {children}
    </div>
  )
})

export { MtScrollArea }
export type { MtScrollAreaProps }
