/**
 * BreadcrumbsSimple
 * Saf React bileşen implementasyonu (RAC bağımsız).
 * Otomatik chevron ayracı; son item "current" sayfa olarak işaretlenir.
 *   <BreadcrumbsSimple className="rounded-lg bg-muted/50 px-3 py-2">
 *     <BreadcrumbsSimpleItem href="#">Home</BreadcrumbsSimpleItem>
 *     <BreadcrumbsSimpleItem>Laptop</BreadcrumbsSimpleItem>
 *   </BreadcrumbsSimple>
 * @id 091
 * @category Breadcrumbs
 */
import { Children, cloneElement, isValidElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "@/components/ui/icons"

interface BreadcrumbsSimpleProps {
  className?: string
  children?: ReactNode
}

interface BreadcrumbsSimpleItemProps {
  /** Verilirse <a> olarak render edilir; verilmezse current (son) sayfa olarak <span> */
  href?: string
  className?: string
  children?: ReactNode
}

function BreadcrumbsSimple({ className, children }: BreadcrumbsSimpleProps) {
  const items = Children.toArray(children)
  return (
    <nav aria-label="breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((child, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="size-4 shrink-0 text-muted-foreground/50" aria-hidden="true" />
            )}
            {i === items.length - 1 && isValidElement(child)
              ? cloneElement(child, { "aria-current": "page" } as object)
              : child}
          </li>
        ))}
      </ol>
    </nav>
  )
}

function BreadcrumbsSimpleItem({ href, className, children }: BreadcrumbsSimpleItemProps) {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
          className
        )}
      >
        {children}
      </a>
    )
  }
  return <span className={cn("font-medium text-foreground", className)}>{children}</span>
}

export { BreadcrumbsSimple, BreadcrumbsSimpleItem }
export type { BreadcrumbsSimpleProps, BreadcrumbsSimpleItemProps }
