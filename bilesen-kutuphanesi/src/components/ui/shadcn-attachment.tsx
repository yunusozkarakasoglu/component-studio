/**
 * ShadcnAttachment familyası
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Ek dosya — Attachment + Group + Media (image) + Content + Title + Description + Actions + Action.
 *   <ShadcnAttachment>
 *     <ShadcnAttachmentMedia>…</ShadcnAttachmentMedia>
 *     <ShadcnAttachmentContent>
 *       <ShadcnAttachmentTitle>file.pdf</ShadcnAttachmentTitle>
 *       <ShadcnAttachmentDescription>PDF · 12 KB</ShadcnAttachmentDescription>
 *     </ShadcnAttachmentContent>
 *   </ShadcnAttachment>
 * state: default | uploading.
 * @id 1001
 * @category Genel
 * @subcategory ShadcnAttachment
 * @source shadcn
 */
import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnAttachmentProps extends HTMLAttributes<HTMLDivElement> {
  state?: "default" | "uploading"
}

function ShadcnAttachment({ className, state = "default", ...props }: ShadcnAttachmentProps) {
  return (
    <div
      data-slot="shadcn-attachment"
      data-state={state}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border border-border p-3",
        state === "uploading" && "border-blue-400 bg-blue-50/40 dark:bg-blue-950/20",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnAttachmentGroupProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAttachmentGroup({ className, ...props }: ShadcnAttachmentGroupProps) {
  return <div data-slot="shadcn-attachment-group" className={cn("flex w-full flex-col gap-3", className)} {...props} />
}

interface ShadcnAttachmentMediaProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "image"
}

function ShadcnAttachmentMedia({ className, variant = "default", ...props }: ShadcnAttachmentMediaProps) {
  return (
    <div
      data-slot="shadcn-attachment-media"
      data-variant={variant}
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground",
        variant === "image" && "overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnAttachmentContentProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAttachmentContent({ className, ...props }: ShadcnAttachmentContentProps) {
  return <div data-slot="shadcn-attachment-content" className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)} {...props} />
}

interface ShadcnAttachmentTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

function ShadcnAttachmentTitle({ className, ...props }: ShadcnAttachmentTitleProps) {
  return <h4 data-slot="shadcn-attachment-title" className={cn("truncate text-sm font-medium leading-none", className)} {...props} />
}

interface ShadcnAttachmentDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

function ShadcnAttachmentDescription({ className, ...props }: ShadcnAttachmentDescriptionProps) {
  return <p data-slot="shadcn-attachment-description" className={cn("text-xs text-muted-foreground", className)} {...props} />
}

interface ShadcnAttachmentActionsProps extends HTMLAttributes<HTMLDivElement> {}

function ShadcnAttachmentActions({ className, ...props }: ShadcnAttachmentActionsProps) {
  return <div data-slot="shadcn-attachment-actions" className={cn("flex shrink-0 items-center gap-1", className)} {...props} />
}

interface ShadcnAttachmentActionProps extends HTMLAttributes<HTMLButtonElement> {}

function ShadcnAttachmentAction({ className, ...props }: ShadcnAttachmentActionProps) {
  return (
    <button
      type="button"
      data-slot="shadcn-attachment-action"
      className={cn(
        "inline-flex size-7 cursor-pointer items-center justify-center rounded-md text-muted-foreground transition-colors",
        "hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ShadcnAttachment,
  ShadcnAttachmentAction,
  ShadcnAttachmentActions,
  ShadcnAttachmentContent,
  ShadcnAttachmentDescription,
  ShadcnAttachmentGroup,
  ShadcnAttachmentMedia,
  ShadcnAttachmentTitle,
}
export type {
  ShadcnAttachmentActionProps,
  ShadcnAttachmentActionsProps,
  ShadcnAttachmentContentProps,
  ShadcnAttachmentDescriptionProps,
  ShadcnAttachmentGroupProps,
  ShadcnAttachmentMediaProps,
  ShadcnAttachmentProps,
  ShadcnAttachmentTitleProps,
}
