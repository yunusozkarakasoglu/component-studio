/**
 * ShadcnTypography
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Tipografi stilleri — h1-h4, p, blockquote, code, lead, large, muted, small.
 * Not: shadcn varsayılan tipografi stili göndermez; bu dosya örneklerde
 * kullanılan yardımcı bileşenleri sağlar.
 * @id 964
 * @category Genel
 * @subcategory ShadcnTypography
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function ShadcnTypographyH1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight text-balance", className)} {...props} />
}
function ShadcnTypographyH2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0", className)} {...props} />
}
function ShadcnTypographyH3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
}
function ShadcnTypographyH4({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
}
function ShadcnTypographyP({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
}
function ShadcnTypographyBlockquote({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
}
function ShadcnTypographyCode({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)} {...props} />
}
function ShadcnTypographyLead({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-xl text-muted-foreground", className)} {...props} />
}
function ShadcnTypographyLarge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />
}
function ShadcnTypographyMuted({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}
function ShadcnTypographySmall({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <small className={cn("text-sm leading-none font-medium", className)} {...props} />
}

export {
  ShadcnTypographyBlockquote,
  ShadcnTypographyCode,
  ShadcnTypographyH1,
  ShadcnTypographyH2,
  ShadcnTypographyH3,
  ShadcnTypographyH4,
  ShadcnTypographyLarge,
  ShadcnTypographyLead,
  ShadcnTypographyMuted,
  ShadcnTypographyP,
  ShadcnTypographySmall,
}
