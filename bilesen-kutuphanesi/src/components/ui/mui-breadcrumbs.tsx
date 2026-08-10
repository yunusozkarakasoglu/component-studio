/**
 * MuiBreadcrumbs
 * Saf React bileşen (bağımlılıksız) — Material UI kaynaklı.
 * İçerik yolu — hiyerarşik navigasyon.
 *   <MuiBreadcrumbs items={[{label, href?}]} />
 * items: {label, href?, onClick?}[] · separator: ayraç (varsayılan /)
 * @id 1994
 * @category Navigasyon
 * @subcategory MuiBreadcrumbs
 * @source mui
 */
import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MuiBreadcrumbsItem {
  label: ReactNode
  href?: string
  onClick?: () => void
}

interface MuiBreadcrumbsProps {
  items?: MuiBreadcrumbsItem[]
  separator?: ReactNode
  className?: string
}

function MuiBreadcrumbs({ items = [], separator = "/", className }: MuiBreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)}>
      {items.map((item, i) => {
        const last = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1.5">
            {item.href || item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className={cn("cursor-pointer text-blue-600 hover:underline", last && "font-semibold text-gray-900 hover:no-underline")}
              >
                {item.label}
              </button>
            ) : (
              <span className={cn(last ? "font-semibold text-gray-900" : "text-gray-500")}>{item.label}</span>
            )}
            {!last && <span className="text-gray-400" aria-hidden>{separator}</span>}
          </span>
        )
      })}
    </nav>
  )
}

export { MuiBreadcrumbs }
export type { MuiBreadcrumbsProps, MuiBreadcrumbsItem }
