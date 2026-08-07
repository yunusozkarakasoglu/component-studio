/**
 * ShadcnAspectRatio
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Belirtilen oranda içerik sarmalayıcısı.
 *   <ShadcnAspectRatio ratio={16 / 9}>…</ShadcnAspectRatio>
 * @id 979
 * @category Genel
 * @subcategory ShadcnAspectRatio
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnAspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

function ShadcnAspectRatio({ className, ratio = 1, children, ...props }: ShadcnAspectRatioProps) {
  return (
    <div
      data-slot="shadcn-aspect-ratio"
      style={{ aspectRatio: String(ratio) }}
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { ShadcnAspectRatio }
export type { ShadcnAspectRatioProps }
