/**
 * ShadcnField
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Form alanı sarmalayıcısı — label + control + açıklama + grup compound.
 *   <ShadcnField data-invalid>
 *     <ShadcnFieldLabel htmlFor="x">Username</ShadcnFieldLabel>
 *     <ShadcnInput id="x" />
 *     <ShadcnFieldDescription>…</ShadcnFieldDescription>
 *   </ShadcnField>
 * Özellikler: orientation (vertical/horizontal) · data-invalid/data-disabled ·
 * ShadcnFieldGroup (birden çok alan).
 * @id 616
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { cn } from "@/lib/utils"

interface ShadcnFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal"
  "data-invalid"?: string | boolean
  "data-disabled"?: string | boolean
}

function ShadcnField({ className, orientation = "vertical", ...props }: ShadcnFieldProps) {
  return (
    <div
      data-slot="shadcn-field"
      data-invalid={props["data-invalid"] ? "true" : undefined}
      data-disabled={props["data-disabled"] ? "true" : undefined}
      className={cn(
        "group flex flex-col gap-1.5",
        orientation === "horizontal" && "flex-row items-center gap-3",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnFieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function ShadcnFieldLabel({ className, ...props }: ShadcnFieldLabelProps) {
  return (
    <label
      data-slot="shadcn-field-label"
      className={cn("flex items-center gap-1.5 text-sm font-medium text-foreground", "group-data-disabled:opacity-50", className)}
      {...props}
    />
  )
}

interface ShadcnFieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function ShadcnFieldDescription({ className, ...props }: ShadcnFieldDescriptionProps) {
  return (
    <p
      data-slot="shadcn-field-description"
      className={cn("text-xs text-muted-foreground", "group-data-invalid:text-red-500", className)}
      {...props}
    />
  )
}

interface ShadcnFieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function ShadcnFieldGroup({ className, ...props }: ShadcnFieldGroupProps) {
  return <div data-slot="shadcn-field-group" className={cn("flex flex-col gap-4", className)} {...props} />
}

interface ShadcnFieldContentProps extends React.HTMLAttributes<HTMLDivElement> {}

function ShadcnFieldContent({ className, ...props }: ShadcnFieldContentProps) {
  return <div data-slot="shadcn-field-content" className={cn("flex flex-col gap-0.5", className)} {...props} />
}

interface ShadcnFieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function ShadcnFieldError({ className, ...props }: ShadcnFieldErrorProps) {
  return <p data-slot="shadcn-field-error" className={cn("text-sm text-red-500", className)} {...props} />
}

interface ShadcnFieldSetProps extends React.HTMLAttributes<HTMLFieldSetElement> {}

function ShadcnFieldSet({ className, ...props }: ShadcnFieldSetProps) {
  return <fieldset data-slot="shadcn-field-set" className={cn("group/field-set flex flex-col gap-4", className)} {...props} />
}

interface ShadcnFieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: "default" | "label"
}

function ShadcnFieldLegend({ className, variant = "default", ...props }: ShadcnFieldLegendProps) {
  return (
    <legend
      data-slot="shadcn-field-legend"
      className={cn(
        "text-base font-medium text-foreground",
        variant === "label" && "text-sm",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnFieldTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function ShadcnFieldTitle({ className, ...props }: ShadcnFieldTitleProps) {
  return <h3 data-slot="shadcn-field-title" className={cn("text-sm font-medium text-foreground", className)} {...props} />
}

interface ShadcnFieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

function ShadcnFieldSeparator({ className, ...props }: ShadcnFieldSeparatorProps) {
  return (
    <div
      data-slot="shadcn-field-separator"
      role="separator"
      aria-orientation="horizontal"
      className={cn("h-px w-full bg-border", className)}
      {...props}
    />
  )
}

export {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldError,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSeparator,
  ShadcnFieldSet,
  ShadcnFieldTitle,
}
export type {
  ShadcnFieldContentProps,
  ShadcnFieldDescriptionProps,
  ShadcnFieldErrorProps,
  ShadcnFieldGroupProps,
  ShadcnFieldLabelProps,
  ShadcnFieldLegendProps,
  ShadcnFieldProps,
  ShadcnFieldSeparatorProps,
  ShadcnFieldSetProps,
  ShadcnFieldTitleProps,
}
