/**
 * MtBreadcrumbs
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * İçerik yolu — children arasında otomatik ayraç.
 *   <MtBreadcrumbs>{[<a>Home</a>, <a>Library</a>, <span>Data</span>]}</MtBreadcrumbs>
 * @id 1388
 * @category Navigasyon
 * @subcategory MtBreadcrumbs
 * @source mantine
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtBreadcrumbsProps {
  children?: ReactNode
  separator?: ReactNode
  className?: string
}

function MtBreadcrumbs({ children, separator = "/", className }: MtBreadcrumbsProps) {
  const items = Array.isArray(children) ? children : children != null ? [children] : []

  return (
    <nav data-slot="mt-breadcrumbs" aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item}
          {i < items.length - 1 && <span className="text-muted-foreground">{separator}</span>}
        </span>
      ))}
    </nav>
  )
}

export { MtBreadcrumbs }
export type { MtBreadcrumbsProps }
