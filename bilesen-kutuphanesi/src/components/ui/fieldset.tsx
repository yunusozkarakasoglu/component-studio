/**
 * Fieldset
 * Saf React bileşen (bağımlılıksız).
 * İlgili form kontrollerini legend + aksiyonlarla gruplar.
 *   <Fieldset>
 *     <FieldsetLegend>Profile Settings</FieldsetLegend>
 *     <Description>…</Description>
 *     <FieldsetGroup>
 *       <TextField>…</TextField>
 *     </FieldsetGroup>
 *     <FieldsetActions>
 *       <Button type="submit">Kaydet</Button>
 *     </FieldsetActions>
 *   </Fieldset>
 * @id 367
 * @category Form Elemanları
 * @subcategory Fieldset
 */
import type { FieldsetHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------- Root ---------- */

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {}

function Fieldset({ className, children, ...props }: FieldsetProps) {
  return (
    <fieldset
      data-slot="fieldset"
      className={cn("flex flex-col gap-5 rounded-xl border border-border/60 bg-background p-6", className)}
      {...props}
    >
      {children}
    </fieldset>
  )
}

/* ---------- Legend ---------- */

interface FieldsetLegendProps extends HTMLAttributes<HTMLLegendElement> {}

function FieldsetLegend({ className, children, ...props }: FieldsetLegendProps) {
  return (
    <legend data-slot="fieldset-legend" className={cn("text-lg font-semibold text-foreground", className)} {...props}>
      {children}
    </legend>
  )
}

/* ---------- Group ---------- */

interface FieldsetGroupProps extends HTMLAttributes<HTMLDivElement> {}

function FieldsetGroup({ className, children, ...props }: FieldsetGroupProps) {
  return (
    <div
      data-slot="fieldset-group"
      className={cn("flex flex-col gap-3 md:grid md:grid-cols-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

/* ---------- Actions ---------- */

interface FieldsetActionsProps extends HTMLAttributes<HTMLDivElement> {}

function FieldsetActions({ className, children, ...props }: FieldsetActionsProps) {
  return (
    <div data-slot="fieldset-actions" className={cn("flex justify-end gap-2 pt-2", className)} {...props}>
      {children}
    </div>
  )
}

export { Fieldset, FieldsetActions, FieldsetGroup, FieldsetLegend }
export type { FieldsetActionsProps, FieldsetGroupProps, FieldsetLegendProps, FieldsetProps }
