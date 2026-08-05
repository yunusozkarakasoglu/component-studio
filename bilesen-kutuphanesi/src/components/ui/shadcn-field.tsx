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

export { ShadcnField, ShadcnFieldDescription, ShadcnFieldGroup, ShadcnFieldLabel }
export type { ShadcnFieldDescriptionProps, ShadcnFieldGroupProps, ShadcnFieldLabelProps, ShadcnFieldProps }
