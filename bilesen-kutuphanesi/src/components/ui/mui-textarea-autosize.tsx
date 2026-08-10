/**
 * MuiTextareaAutosize
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Otomatik boyutlanan metin alanı — içerik büyüdükçe genişler.
 *   <MuiTextareaAutosize minRows={3} maxRows={6} placeholder="…" />
 * minRows: minimum satır · maxRows: maksimum satır (sonra scroll)
 * @id 1929
 * @category Form Elemanları
 * @subcategory MuiTextareaAutosize
 * @source mui
 */
import { useRef, useEffect, type TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MuiTextareaAutosizeProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number
  maxRows?: number
}

function MuiTextareaAutosize({ minRows = 2, maxRows = 8, className, onChange, ...rest }: MuiTextareaAutosizeProps) {
  const ref = useRef<HTMLTextAreaElement | null>(null)
  const lineHeight = 20 // 1.25rem ≈ 20px
  const minH = minRows * lineHeight
  const maxH = maxRows * lineHeight

  const resize = () => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = Math.min(Math.max(el.scrollHeight, minH), maxH) + "px"
  }

  useEffect(resize, [minH, maxH])

  return (
    <textarea
      ref={ref}
      onChange={(e) => {
        resize()
        onChange?.(e)
      }}
      className={cn(
        "w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-blue-500",
        className
      )}
      style={{ minHeight: minH, maxHeight: maxH }}
      {...rest}
    />
  )
}

export { MuiTextareaAutosize }
export type { MuiTextareaAutosizeProps }
