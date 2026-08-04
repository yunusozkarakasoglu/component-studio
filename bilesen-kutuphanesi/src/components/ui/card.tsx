/**
 * Card
 * HeroUI card'dan uyarlanmış — saf React (bağımlılıksız).
 * Semantik varyantlar + compound parçalar.
 *   <Card variant="secondary">
 *     <CardHeader><CardTitle/><CardDescription/></CardHeader>
 *     <CardContent>...</CardContent>
 *     <CardFooter>...</CardFooter>
 *   </Card>
 * @id 188
 * @category Kartlar
 */
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type CardVariant = "transparent" | "default" | "secondary" | "tertiary"

const cardVariantClass: Record<CardVariant, string> = {
  transparent: "border-transparent bg-transparent p-0",
  default: "border-border bg-card",
  secondary: "border-border bg-muted",
  tertiary: "border-border bg-muted/70",
}

interface CardProps {
  variant?: CardVariant
  className?: string
  children?: ReactNode
}

function Card({ variant = "default", className, children }: CardProps) {
  return (
    <div data-slot="card" data-variant={variant}
      className={cn("flex flex-col rounded-2xl border p-4", cardVariantClass[variant], className)}>
      {children}
    </div>
  )
}

interface CardSectionProps {
  className?: string
  children?: ReactNode
}

function CardHeader({ className, children }: CardSectionProps) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-0.5", className)}>{children}</div>
}

function CardTitle({ className, children }: CardSectionProps) {
  return <h3 data-slot="card-title" className={cn("text-base font-semibold text-foreground", className)}>{children}</h3>
}

function CardDescription({ className, children }: CardSectionProps) {
  return <p data-slot="card-description" className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

function CardContent({ className, children }: CardSectionProps) {
  return <div data-slot="card-content" className={cn("mt-3 flex-1", className)}>{children}</div>
}

function CardFooter({ className, children }: CardSectionProps) {
  return <div data-slot="card-footer" className={cn("mt-4 flex items-center gap-2", className)}>{children}</div>
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
export type { CardProps, CardVariant }
