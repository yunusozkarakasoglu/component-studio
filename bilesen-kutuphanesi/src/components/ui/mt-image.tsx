/**
 * MtImage
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Görsel — radius, fit, caption, fallback, yükseklik.
 *   <MtImage src="…" radius="md" caption="Açıklama" />
 * @id 1436
 * @category Veri Gösterimi
 * @subcategory MtImage
 * @source mantine
 */
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MtImageProps {
  src?: string
  alt?: string
  radius?: "sm" | "md" | "lg" | "xl" | "full"
  fit?: "cover" | "contain" | "fill" | "none"
  h?: number | string
  w?: number | string
  fallbackSrc?: string
  caption?: string
  captionSide?: "top" | "bottom"
  className?: string
}

const imgRadii: Record<string, string> = { sm: "rounded-md", md: "rounded-lg", lg: "rounded-xl", xl: "rounded-2xl", full: "rounded-full" }
const imgFits: Record<string, string> = { cover: "object-cover", contain: "object-contain", fill: "object-fill", none: "object-none" }

function MtImage({ src, alt = "", radius = "sm", fit = "cover", h, w, fallbackSrc, caption, captionSide = "bottom", className }: MtImageProps) {
  const [error, setError] = useState(false)
  const effectiveSrc = error && fallbackSrc ? fallbackSrc : src

  return (
    <figure className={cn("flex flex-col", captionSide === "top" && "flex-col-reverse", className)}>
      {effectiveSrc ? (
        <img
          src={effectiveSrc}
          alt={alt}
          onError={() => setError(true)}
          className={cn("w-full", imgFits[fit], imgRadii[radius])}
          style={{ height: h ?? "auto", width: w ?? "100%" }}
        />
      ) : (
        <div className={cn("flex w-full items-center justify-center bg-muted text-xs text-muted-foreground", imgRadii[radius])} style={{ height: h ?? 120 }}>
          Görsel yok
        </div>
      )}
      {caption && <figcaption className="py-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  )
}

export { MtImage }
export type { MtImageProps }
