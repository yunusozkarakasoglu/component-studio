/**
 * ShadcnInputRequired
 * Zorunlu input — label'da * işareti (saf React, shadcn kaynaklı).
 * @id 627
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputRequired() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="input-required">
        Required Field <span className="text-red-500">*</span>
      </ShadcnFieldLabel>
      <ShadcnInput id="input-required" placeholder="This field is required" required />
      <ShadcnFieldDescription>This field must be filled out.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputRequired }
