/**
 * Breadcrumbs
 * Saf React bileşen (bağımlılıksız).
 * Otomatik ayraç (separator) · isDisabled · özel separator · render.
 *   <Breadcrumbs>
 *     <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
 *     <BreadcrumbsItem>Laptop</BreadcrumbsItem>
 *   </Breadcrumbs>
 * href'siz son item otomatik "current" sayfa olur (aria-current="page").
 * @id 164
 * @category Breadcrumbs
 */
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "@/components/ui/icons"

interface BreadcrumbsProps {
  /** Item'lar arası ayraç (varsayılan: chevron-right) */
  separator?: ReactNode
  /** Tüm linkleri devre dışı bırakır */
  isDisabled?: boolean
  /** Kök nav elementini özel render ile değiştirir */
  render?: (props: Record<string, unknown>) => ReactNode
  className?: string
  children?: ReactNode
}

function Breadcrumbs({ separator, isDisabled, render, className, children }: BreadcrumbsProps) {
  const items = Children.toArray(children)

  const navProps: Record<string, unknown> = {
    "aria-label": "breadcrumb",
    className: cn("flex flex-wrap items-center gap-1.5 text-sm", className),
    "data-disabled": isDisabled || undefined,
  }

  const content = (
    <ol className="flex flex-wrap items-center gap-1.5">
      {items.map((child, i) => {
        const last = i === items.length - 1
        const item = isValidElement(child)
          ? cloneElement(child as ReactElement, { isLast: last, isDisabled } as Record<string, unknown>)
          : child
        return (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="text-muted-foreground/60">
                {separator ?? <ChevronRight className="size-4" />}
              </span>
            )}
            {item}
          </li>
        )
      })}
    </ol>
  )

  if (render) return <>{render({ ...navProps, children: content })}</>
  return <nav {...navProps}>{content}</nav>
}

interface BreadcrumbsItemProps {
  /** Verilirse <a>; verilmezse current sayfa (<span aria-current="page">) */
  href?: string
  className?: string
  children?: ReactNode
  /** (iç) Son item işareti */
  isLast?: boolean
  isDisabled?: boolean
}

function BreadcrumbsItem({ href, className, children, isDisabled }: BreadcrumbsItemProps) {
  if (href) {
    return (
      <a
        href={href}
        aria-disabled={isDisabled || undefined}
        className={cn(
          "rounded text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
          isDisabled && "pointer-events-none opacity-50",
          className
        )}
      >
        {children}
      </a>
    )
  }
  return (
    <span aria-current="page" className={cn("font-medium text-foreground", className)}>
      {children}
    </span>
  )
}

export { Breadcrumbs, BreadcrumbsItem }
export type { BreadcrumbsItemProps, BreadcrumbsProps }
