/**
 * Typography
 * Saf React bileşen (bağımlılıksız).
 * Tipografi ölçeği — başlık/paragraf elementleri (as prop).
 *   <Typography as="h1">Başlık</Typography>
 *   <Typography as="p" variant="muted">Açıklama</Typography>
 * Özellikler: as (h1-h6/p/span) · variant (default/muted/lead/small) ·
 * className.
 * @id 602
 * @category Genel
 * @subcategory Typography
 */
import type { ElementType, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type TypographyAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
type TypographyVariant = "default" | "muted" | "lead" | "small"

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyAs
  variant?: TypographyVariant
  children?: ReactNode
}

const scaleClass: Record<TypographyAs, string> = {
  h1: "scroll-m-20 text-4xl font-bold tracking-tight",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "scroll-m-20 text-lg font-semibold tracking-tight",
  h6: "scroll-m-20 text-base font-semibold tracking-tight",
  p: "text-base leading-7",
  span: "text-base",
}

const variantClass: Record<TypographyVariant, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  lead: "text-lg text-muted-foreground",
  small: "text-sm text-muted-foreground leading-5",
}

function Typography({ as = "p", variant = "default", className, children, ...props }: TypographyProps) {
  const Tag = as as ElementType
  return (
    <Tag data-slot="typography" data-variant={variant} className={cn(scaleClass[as], variantClass[variant], className)} {...props}>
      {children}
    </Tag>
  )
}

export { Typography }
export type { TypographyAs, TypographyProps, TypographyVariant }
