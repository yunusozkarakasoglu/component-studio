/**
 * MuiCard
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * Kart — içerik, başlık, medya, aksiyon bölümleri.
 *   <MuiCard title="…" subheader="…" actions={<…>} media={<img/>}>…</MuiCard>
 * variant: elevation (gölgeli) | outlined (kenarlıklı)
 * title · subheader · actions (alt) · media (üst görsel)
 * @id 2005
 * @category Veri Gösterimi
 * @subcategory MuiCard
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiCardProps {
  title?: ReactNode
  subheader?: ReactNode
  actions?: ReactNode
  media?: ReactNode
  variant?: "elevation" | "outlined"
  className?: string
  children?: ReactNode
}

function MuiCard({
  title,
  subheader,
  actions,
  media,
  variant = "elevation",
  className,
  children,
}: MuiCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-white text-gray-900",
        variant === "outlined" ? "rounded-lg border border-gray-300" : "rounded-lg shadow-md",
        className
      )}
    >
      {media && <div className="overflow-hidden rounded-t-lg">{media}</div>}
      {(title || subheader) && (
        <div className="px-4 pt-3">
          {title && <h3 className="text-base font-semibold">{title}</h3>}
          {subheader && <p className="text-sm text-gray-500">{subheader}</p>}
        </div>
      )}
      <div className="flex-1 p-4 text-sm text-gray-700">{children}</div>
      {actions && <div className="flex items-center gap-1 border-t border-gray-100 px-3 py-2">{actions}</div>}
    </div>
  )
}

export { MuiCard }
export type { MuiCardProps }
