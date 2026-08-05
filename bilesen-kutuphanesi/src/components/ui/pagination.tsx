/**
 * Pagination
 * Saf React bileşen (bağımlılıksız).
 * Sayfa navigasyonu — Previous/Next + sayfa bağlantıları + ellipsis + özet.
 *   <Pagination size="md">
 *     <PaginationSummary>1 to 10 of 50</PaginationSummary>
 *     <PaginationContent>
 *       <PaginationItem><PaginationPrevious onPress={...}><PaginationPreviousIcon /><span>Prev</span></PaginationPrevious></PaginationItem>
 *       <PaginationItem><PaginationLink isActive onPress={...}>1</PaginationLink></PaginationItem>
 *       <PaginationItem><PaginationEllipsis /></PaginationItem>
 *       <PaginationItem><PaginationNext onPress={...}><span>Next</span><PaginationNextIcon /></PaginationNext></PaginationItem>
 *     </PaginationContent>
 *   </Pagination>
 * Özellikler: size (sm/md/lg) · isActive (aria-current) · isDisabled · onPress ·
 * özel ikon children (PreviousIcon/NextIcon).
 * @id 484
 * @category Navigasyon
 * @subcategory Pagination
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "@/components/ui/icons"

/* ---------- Types ---------- */

type PaginationSize = "sm" | "md" | "lg"

interface PaginationProps {
  children?: ReactNode
  className?: string
  size?: PaginationSize
}

function Pagination({ children, className, size = "md" }: PaginationProps) {
  return (
    <nav data-slot="pagination" aria-label="pagination" role="navigation" data-size={size}
      className={cn("flex flex-wrap items-center gap-4", className)}>
      {children}
    </nav>
  )
}

/* ---------- Summary ---------- */

interface PaginationSummaryProps {
  children?: ReactNode
  className?: string
}

function PaginationSummary({ children, className }: PaginationSummaryProps) {
  return (
    <p data-slot="pagination-summary" className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

/* ---------- Content ---------- */

interface PaginationContentProps {
  children?: ReactNode
  className?: string
}

function PaginationContent({ children, className }: PaginationContentProps) {
  return (
    <div data-slot="pagination-content" className={cn("flex items-center gap-1", className)}>
      {children}
    </div>
  )
}

/* ---------- Item ---------- */

interface PaginationItemProps {
  children?: ReactNode
  className?: string
}

function PaginationItem({ children, className }: PaginationItemProps) {
  return <div data-slot="pagination-item" className={className}>{children}</div>
}

/* ---------- Link ---------- */

interface PaginationLinkProps {
  children?: ReactNode
  className?: string
  isActive?: boolean
  isDisabled?: boolean
  onPress?: () => void
}

const linkSizeClass: Record<PaginationSize, string> = {
  sm: "h-7 min-w-7 px-1.5 text-xs",
  md: "h-8 min-w-8 px-2 text-sm",
  lg: "h-10 min-w-10 px-2.5 text-base",
}

function PaginationLink({ children, className, isActive = false, isDisabled = false, onPress }: PaginationLinkProps) {
  return (
    <button
      type="button"
      data-slot="pagination-link"
      data-active={isActive ? "true" : undefined}
      aria-current={isActive ? "page" : undefined}
      disabled={isDisabled}
      onClick={onPress}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
        isActive && "bg-foreground text-background hover:bg-foreground",
        isDisabled && "cursor-not-allowed opacity-50 hover:bg-transparent",
        linkSizeClass.md,
        className
      )}
    >
      {children}
    </button>
  )
}

/* ---------- Previous / Next ---------- */

interface PaginationNavButtonProps {
  children?: ReactNode
  className?: string
  isDisabled?: boolean
  onPress?: () => void
}

function PaginationPrevious({ children, className, isDisabled = false, onPress }: PaginationNavButtonProps) {
  return (
    <button
      type="button"
      data-slot="pagination-previous"
      disabled={isDisabled}
      onClick={onPress}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
        isDisabled && "cursor-not-allowed opacity-50 hover:bg-transparent",
        className
      )}
    >
      {children}
    </button>
  )
}

function PaginationNext({ children, className, isDisabled = false, onPress }: PaginationNavButtonProps) {
  return (
    <button
      type="button"
      data-slot="pagination-next"
      disabled={isDisabled}
      onClick={onPress}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-sm font-medium text-foreground transition-colors outline-none",
        "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
        isDisabled && "cursor-not-allowed opacity-50 hover:bg-transparent",
        className
      )}
    >
      {children}
    </button>
  )
}

/* ---------- Icons ---------- */

interface PaginationIconProps {
  children?: ReactNode
  className?: string
}

function PaginationPreviousIcon({ children, className }: PaginationIconProps) {
  return <span data-slot="pagination-previous-icon" className={cn("inline-flex", className)}>{children ?? <ChevronLeft className="size-4" />}</span>
}

function PaginationNextIcon({ children, className }: PaginationIconProps) {
  return <span data-slot="pagination-next-icon" className={cn("inline-flex", className)}>{children ?? <ChevronRight className="size-4" />}</span>
}

/* ---------- Ellipsis ---------- */

interface PaginationEllipsisProps {
  className?: string
}

function PaginationEllipsis({ className }: PaginationEllipsisProps) {
  return (
    <span data-slot="pagination-ellipsis" aria-hidden="true" className={cn("inline-flex h-8 w-8 items-center justify-center text-sm text-muted-foreground", className)}>
      …
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextIcon,
  PaginationPrevious,
  PaginationPreviousIcon,
  PaginationSummary,
}
export type { PaginationEllipsisProps, PaginationLinkProps, PaginationProps, PaginationSize }
