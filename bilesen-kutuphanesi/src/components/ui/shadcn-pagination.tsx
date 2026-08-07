/**
 * ShadcnPagination familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Sayfalama — Pagination + Content + Item + Link (isActive) + Previous + Next + Ellipsis.
 *   <ShadcnPagination>
 *     <ShadcnPaginationContent>
 *       <ShadcnPaginationItem>
 *         <ShadcnPaginationPrevious href="#" />
 *       </ShadcnPaginationItem>
 *       <ShadcnPaginationItem>
 *         <ShadcnPaginationLink href="#" isActive>2</ShadcnPaginationLink>
 *       </ShadcnPaginationItem>
 *       <ShadcnPaginationEllipsis />
 *       <ShadcnPaginationItem>
 *         <ShadcnPaginationNext href="#" />
 *       </ShadcnPaginationItem>
 *     </ShadcnPaginationContent>
 *   </ShadcnPagination>
 * @id 841
 * @category Navigasyon
 * @subcategory ShadcnPagination
 * @source shadcn
 */
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "@/components/ui/icons"

interface ShadcnPaginationProps extends HTMLAttributes<HTMLElement> {}

function ShadcnPagination({ className, ...props }: ShadcnPaginationProps) {
  return <nav role="navigation" aria-label="pagination" data-slot="shadcn-pagination" className={cn("mx-auto flex w-full justify-center", className)} {...props} />
}

interface ShadcnPaginationContentProps extends HTMLAttributes<HTMLUListElement> {}

function ShadcnPaginationContent({ className, ...props }: ShadcnPaginationContentProps) {
  return <ul data-slot="shadcn-pagination-content" className={cn("flex flex-row items-center gap-1", className)} {...props} />
}

interface ShadcnPaginationItemProps extends HTMLAttributes<HTMLLIElement> {}

function ShadcnPaginationItem({ className, ...props }: ShadcnPaginationItemProps) {
  return <li data-slot="shadcn-pagination-item" className={cn("", className)} {...props} />
}

interface ShadcnPaginationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

function ShadcnPaginationLink({ className, isActive, children, ...props }: ShadcnPaginationLinkProps) {
  return (
    <a
      data-slot="shadcn-pagination-link"
      data-active={isActive ? "true" : undefined}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
        "data-[active=true]:border-border data-[active=true]:bg-muted data-[active=true]:font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

interface ShadcnPaginationPreviousProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function ShadcnPaginationPrevious({ className, children, ...props }: ShadcnPaginationPreviousProps) {
  return (
    <a
      data-slot="shadcn-pagination-previous"
      className={cn(
        "inline-flex h-8 items-center gap-1 rounded-md border border-transparent px-2 text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    >
      <ChevronLeft className="size-4" />
      {children ?? <span>Previous</span>}
    </a>
  )
}

interface ShadcnPaginationNextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function ShadcnPaginationNext({ className, children, ...props }: ShadcnPaginationNextProps) {
  return (
    <a
      data-slot="shadcn-pagination-next"
      className={cn(
        "inline-flex h-8 items-center gap-1 rounded-md border border-transparent px-2 text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40",
        className
      )}
      {...props}
    >
      {children ?? <span>Next</span>}
      <ChevronRight className="size-4" />
    </a>
  )
}

interface ShadcnPaginationEllipsisProps extends HTMLAttributes<HTMLSpanElement> {}

function ShadcnPaginationEllipsis({ className, ...props }: ShadcnPaginationEllipsisProps) {
  return (
    <span aria-hidden data-slot="shadcn-pagination-ellipsis" className={cn("flex h-8 w-8 items-center justify-center text-muted-foreground", className)} {...props}>
      <ChevronsLeft className="hidden size-4" />
      <span className="text-sm">…</span>
      <ChevronsRight className="hidden size-4" />
    </span>
  )
}

export {
  ShadcnPagination,
  ShadcnPaginationContent,
  ShadcnPaginationEllipsis,
  ShadcnPaginationItem,
  ShadcnPaginationLink,
  ShadcnPaginationNext,
  ShadcnPaginationPrevious,
}
export type {
  ShadcnPaginationContentProps,
  ShadcnPaginationEllipsisProps,
  ShadcnPaginationItemProps,
  ShadcnPaginationLinkProps,
  ShadcnPaginationNextProps,
  ShadcnPaginationPreviousProps,
  ShadcnPaginationProps,
}
