/**
 * ShadcnCard familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Kart — Header/Title/Description/Action/Content/Footer compound.
 *   <ShadcnCard>
 *     <ShadcnCardHeader>
 *       <ShadcnCardTitle>…</ShadcnCardTitle>
 *       <ShadcnCardDescription>…</ShadcnCardDescription>
 *     </ShadcnCardHeader>
 *     <ShadcnCardContent>…</ShadcnCardContent>
 *     <ShadcnCardFooter>…</ShadcnCardFooter>
 *   </ShadcnCard>
 * Özellikler: size (sm/default) · --card-spacing CSS değişkeni.
 * @id 767
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnCardProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default"
}

function ShadcnCard({ className, size = "default", ...props }: ShadcnCardProps) {
  return (
    <div
      data-slot="shadcn-card"
      style={{ "--card-spacing": size === "sm" ? "1rem" : "1.5rem" } as React.CSSProperties}
      className={cn(
        "flex flex-col gap-(--card-spacing) rounded-xl border border-border bg-card text-card-foreground shadow-xs",
        "p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnCardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCardHeader({ className, ...props }: ShadcnCardHeaderProps) {
  return <div data-slot="shadcn-card-header" className={cn("flex flex-col gap-1.5", className)} {...props} />
}

interface ShadcnCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnCardTitle({ className, ...props }: ShadcnCardTitleProps) {
  return <h3 data-slot="shadcn-card-title" className={cn("font-semibold text-foreground leading-none", className)} {...props} />
}

interface ShadcnCardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnCardDescription({ className, ...props }: ShadcnCardDescriptionProps) {
  return <p data-slot="shadcn-card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnCardActionProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCardAction({ className, ...props }: ShadcnCardActionProps) {
  return <div data-slot="shadcn-card-action" className={cn("absolute end-5 top-5 z-40", className)} {...props} />
}

interface ShadcnCardContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCardContent({ className, ...props }: ShadcnCardContentProps) {
  return <div data-slot="shadcn-card-content" className={cn("text-sm", className)} {...props} />
}

interface ShadcnCardFooterProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnCardFooter({ className, ...props }: ShadcnCardFooterProps) {
  return <div data-slot="shadcn-card-footer" className={cn("flex items-center gap-2", className)} {...props} />
}

export {
  ShadcnCard,
  ShadcnCardAction,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
}
export type {
  ShadcnCardActionProps,
  ShadcnCardContentProps,
  ShadcnCardDescriptionProps,
  ShadcnCardFooterProps,
  ShadcnCardHeaderProps,
  ShadcnCardProps,
  ShadcnCardTitleProps,
}
