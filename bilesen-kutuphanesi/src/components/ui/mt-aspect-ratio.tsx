/**
 * MtAspectRatio
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Belirtilen oranda içerik sarmalayıcısı.
 *   <MtAspectRatio ratio={16 / 9}>…</MtAspectRatio>
 * @id 1034
 * @category Genel
 * @subcategory MtAspectRatio
 * @source mantine
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface MtAspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

function MtAspectRatio({ className, ratio = 1, children, ...props }: MtAspectRatioProps) {
  return (
    <div
      data-slot="mt-aspect-ratio"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: String(ratio) }}
      {...props}
    >
      {children}
    </div>
  )
}

export { MtAspectRatio }
export type { MtAspectRatioProps }
