/**
 * ShadcnInput
 * Saf React bileşen (bağımlılıksız) — shadcn/ui kaynaklı.
 * Temel metin girişi — Field compound ile birlikte kullanılır.
 *   <ShadcnInput placeholder="Enter text" />
 *   <ShadcnField>
 *     <ShadcnFieldLabel htmlFor="x">Username</ShadcnFieldLabel>
 *     <ShadcnInput id="x" placeholder="…" />
 *     <ShadcnFieldDescription>…</ShadcnFieldDescription>
 *   </ShadcnField>
 * Özellikler: native input attribute'ları · aria-invalid (data-invalid ile) ·
 * disabled/required/type=file.
 * @id 615
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ShadcnInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function ShadcnInput({ className, type, ...props }: ShadcnInputProps) {
  return (
    <input
      type={type}
      data-slot="shadcn-input"
      className={cn(
        "flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-xs transition-colors outline-none",
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:focus-visible:ring-red-500/30",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

/* ---------- Field compound (shadcn field) ---------- */

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
        "flex flex-col gap-1.5",
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
      className={cn(
        "flex items-center gap-1.5 text-sm font-medium text-foreground",
        "group-data-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnFieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

function ShadcnFieldDescription({ className, ...props }: ShadcnFieldDescriptionProps) {
  return (
    <p
      data-slot="shadcn-field-description"
      className={cn(
        "text-xs text-muted-foreground",
        "group-data-invalid:text-red-500",
        className
      )}
      {...props}
    />
  )
}

interface ShadcnFieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

function ShadcnFieldGroup({ className, ...props }: ShadcnFieldGroupProps) {
  return <div data-slot="shadcn-field-group" className={cn("flex flex-col gap-4", className)} {...props} />
}

export { ShadcnField, ShadcnFieldDescription, ShadcnFieldGroup, ShadcnFieldLabel, ShadcnInput }
export type { ShadcnFieldDescriptionProps, ShadcnFieldGroupProps, ShadcnFieldLabelProps, ShadcnFieldProps, ShadcnInputProps }
