/**
 * ShadcnEmpty familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Boş durum — Empty + Header + Media (icon/avatar) + Title + Description + Content.
 *   <ShadcnEmpty>
 *     <ShadcnEmptyHeader>
 *       <ShadcnEmptyMedia variant="icon">…</ShadcnEmptyMedia>
 *       <ShadcnEmptyTitle>No Projects Yet</ShadcnEmptyTitle>
 *       <ShadcnEmptyDescription>…</ShadcnEmptyDescription>
 *     </ShadcnEmptyHeader>
 *     <ShadcnEmptyContent>…</ShadcnEmptyContent>
 *   </ShadcnEmpty>
 * @id 925
 * @category Veri Gösterimi
 * @subcategory ShadcnEmpty
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnEmptyProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnEmpty({ className, ...props }: ShadcnEmptyProps) {
  return <div data-slot="shadcn-empty" className={cn("flex w-full flex-col items-center gap-4 p-8 text-center", className)} {...props} />
}

interface ShadcnEmptyHeaderProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnEmptyHeader({ className, ...props }: ShadcnEmptyHeaderProps) {
  return <div data-slot="shadcn-empty-header" className={cn("flex flex-col items-center gap-2", className)} {...props} />
}

interface ShadcnEmptyMediaProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "icon" | "avatar"
}

function ShadcnEmptyMedia({ className, variant = "icon", ...props }: ShadcnEmptyMediaProps) {
  return (
    <div
      data-slot="shadcn-empty-media"
      data-variant={variant}
      className={cn(
        "flex size-12 items-center justify-center rounded-lg bg-muted text-muted-foreground",
        variant === "avatar" && "rounded-full",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnEmptyTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnEmptyTitle({ className, ...props }: ShadcnEmptyTitleProps) {
  return <h3 data-slot="shadcn-empty-title" className={cn("text-lg font-semibold leading-none", className)} {...props} />
}

interface ShadcnEmptyDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnEmptyDescription({ className, ...props }: ShadcnEmptyDescriptionProps) {
  return <p data-slot="shadcn-empty-description" className={cn("max-w-md text-sm text-muted-foreground", className)} {...props} />
}

interface ShadcnEmptyContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnEmptyContent({ className, ...props }: ShadcnEmptyContentProps) {
  return <div data-slot="shadcn-empty-content" className={cn("flex flex-col gap-2", className)} {...props} />
}

export { ShadcnEmpty, ShadcnEmptyContent, ShadcnEmptyDescription, ShadcnEmptyHeader, ShadcnEmptyMedia, ShadcnEmptyTitle }
export type {
  ShadcnEmptyContentProps,
  ShadcnEmptyDescriptionProps,
  ShadcnEmptyHeaderProps,
  ShadcnEmptyMediaProps,
  ShadcnEmptyProps,
  ShadcnEmptyTitleProps,
}
