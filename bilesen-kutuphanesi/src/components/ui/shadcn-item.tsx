/**
 * ShadcnItem familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Liste öğesi — Item + Content + Title + Description + Media + Actions.
 *   <ShadcnItem variant="outline">
 *     <ShadcnItemContent>
 *       <ShadcnItemTitle>Basic Item</ShadcnItemTitle>
 *       <ShadcnItemDescription>…</ShadcnItemDescription>
 *     </ShadcnItemContent>
 *     <ShadcnItemActions>…</ShadcnItemActions>
 *   </ShadcnItem>
 * @id 996
 * @category Genel
 * @subcategory ShadcnItem
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnItemProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "muted"
}

function ShadcnItem({ className, variant = "default", ...props }: ShadcnItemProps) {
  return (
    <div
      data-slot="shadcn-item"
      data-variant={variant}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg p-3",
        variant === "outline" && "border border-border",
        variant === "muted" && "bg-muted/50",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnItemContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnItemContent({ className, ...props }: ShadcnItemContentProps) {
  return <div data-slot="shadcn-item-content" className={cn("flex flex-1 flex-col gap-0.5", className)} {...props} />
}

interface ShadcnItemTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnItemTitle({ className, ...props }: ShadcnItemTitleProps) {
  return <h4 data-slot="shadcn-item-title" className={cn("text-sm font-medium leading-none", className)} {...props} />
}

interface ShadcnItemDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnItemDescription({ className, ...props }: ShadcnItemDescriptionProps) {
  return <p data-slot="shadcn-item-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnItemMediaProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnItemMedia({ className, ...props }: ShadcnItemMediaProps) {
  return <div data-slot="shadcn-item-media" className={cn("flex shrink-0 items-center text-muted-foreground", className)} {...props} />
}

interface ShadcnItemActionsProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnItemActions({ className, ...props }: ShadcnItemActionsProps) {
  return <div data-slot="shadcn-item-actions" className={cn("flex shrink-0 items-center gap-2", className)} {...props} />
}

export { ShadcnItem, ShadcnItemActions, ShadcnItemContent, ShadcnItemDescription, ShadcnItemMedia, ShadcnItemTitle }
export type {
  ShadcnItemActionsProps,
  ShadcnItemContentProps,
  ShadcnItemDescriptionProps,
  ShadcnItemMediaProps,
  ShadcnItemProps,
  ShadcnItemTitleProps,
}
