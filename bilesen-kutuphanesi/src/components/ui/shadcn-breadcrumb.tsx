/**
 * ShadcnBreadcrumb familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * İçerik yolu — Breadcrumb + List + Item + Link + Page + Separator + Ellipsis.
 *   <ShadcnBreadcrumb>
 *     <ShadcnBreadcrumbList>
 *       <ShadcnBreadcrumbItem><ShadcnBreadcrumbLink href="#">Home</ShadcnBreadcrumbLink></ShadcnBreadcrumbItem>
 *       <ShadcnBreadcrumbSeparator />
 *       <ShadcnBreadcrumbItem><ShadcnBreadcrumbPage>Breadcrumb</ShadcnBreadcrumbPage></ShadcnBreadcrumbItem>
 *     </ShadcnBreadcrumbList>
 *   </ShadcnBreadcrumb>
 * @id 846
 * @category Navigasyon
 * @subcategory ShadcnBreadcrumb
 * @source shadcn
 */
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "@/components/ui/icons"

interface ShadcnBreadcrumbProps extends HTMLAttributes<HTMLElement> {}

function ShadcnBreadcrumb({ className, ...props }: ShadcnBreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="shadcn-breadcrumb" className={className} {...props} />
}

interface ShadcnBreadcrumbListProps extends HTMLAttributes<HTMLOListElement> {}

function ShadcnBreadcrumbList({ className, ...props }: ShadcnBreadcrumbListProps) {
  return <ol data-slot="shadcn-breadcrumb-list" className={cn("flex flex-wrap items-center gap-1.5 text-sm", className)} {...props} />
}

interface ShadcnBreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {}

function ShadcnBreadcrumbItem({ className, ...props }: ShadcnBreadcrumbItemProps) {
  return <li data-slot="shadcn-breadcrumb-item" className={cn("inline-flex items-center gap-1.5", className)} {...props} />
}

interface ShadcnBreadcrumbLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function ShadcnBreadcrumbLink({ className, ...props }: ShadcnBreadcrumbLinkProps) {
  return (
    <a
      data-slot="shadcn-breadcrumb-link"
      className={cn(
        "text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnBreadcrumbPageProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnBreadcrumbPage({ className, ...props }: ShadcnBreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      data-slot="shadcn-breadcrumb-page"
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  )
}

interface ShadcnBreadcrumbSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

function ShadcnBreadcrumbSeparator({ className, children, ...props }: ShadcnBreadcrumbSeparatorProps) {
  return (
    <div role="presentation" aria-hidden data-slot="shadcn-breadcrumb-separator" className={cn("text-muted-foreground", className)} {...props}>
      {children ?? <ChevronRight className="size-3.5" />}
    </div>
  )
}

interface ShadcnBreadcrumbEllipsisProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnBreadcrumbEllipsis({ className, ...props }: ShadcnBreadcrumbEllipsisProps) {
  return (
    <span role="presentation" aria-hidden data-slot="shadcn-breadcrumb-ellipsis" className={cn("flex h-8 w-8 items-center justify-center", className)} {...props}>
      <span className="text-sm">…</span>
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  ShadcnBreadcrumb,
  ShadcnBreadcrumbEllipsis,
  ShadcnBreadcrumbItem,
  ShadcnBreadcrumbLink,
  ShadcnBreadcrumbList,
  ShadcnBreadcrumbPage,
  ShadcnBreadcrumbSeparator,
}
export type {
  ShadcnBreadcrumbEllipsisProps,
  ShadcnBreadcrumbItemProps,
  ShadcnBreadcrumbLinkProps,
  ShadcnBreadcrumbListProps,
  ShadcnBreadcrumbPageProps,
  ShadcnBreadcrumbProps,
  ShadcnBreadcrumbSeparatorProps,
}
