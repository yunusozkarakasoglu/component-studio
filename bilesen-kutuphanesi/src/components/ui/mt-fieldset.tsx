/**
 * MtFieldset
 * Saf React bileşen (bağımlılıksız) — Mantine kaynaklı.
 * Alan grubu — fieldset + legend.
 *   <MtFieldset legend="Personal information">…</MtFieldset>
 * @id 1122
 * @category Form Elemanları
 * @subcategory MtFieldset
 * @source mantine
 */
import type { FieldsetHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MtFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: ReactNode
}

function MtFieldset({ className, legend, children, ...props }: MtFieldsetProps) {
  return (
    <fieldset
      data-slot="mt-fieldset"
      className={cn("rounded-md border border-border p-4", className)}
      {...props}
    >
      {legend && (
        <legend className="px-1.5 text-sm font-medium text-foreground">{legend}</legend>
      )}
      {children}
    </fieldset>
  )
}

export { MtFieldset }
export type { MtFieldsetProps }
