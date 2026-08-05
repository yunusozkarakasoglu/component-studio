/**
 * ShadcnInputInvalid
 * Geçersiz input (aria-invalid + data-invalid — saf React, shadcn kaynaklı).
 * @id 623
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel, ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputInvalid() {
  return (
    <ShadcnField className="w-full max-w-72" data-invalid>
      <ShadcnFieldLabel htmlFor="input-invalid">Invalid Input</ShadcnFieldLabel>
      <ShadcnInput id="input-invalid" placeholder="Error" aria-invalid />
      <ShadcnFieldDescription>This field contains validation errors.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputInvalid }
