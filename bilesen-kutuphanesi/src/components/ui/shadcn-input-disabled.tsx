/**
 * ShadcnInputDisabled
 * Devre dışı input (saf React, shadcn kaynaklı).
 * @id 622
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputDisabled() {
  return (
    <ShadcnField className="w-full max-w-72" data-disabled>
      <ShadcnFieldLabel htmlFor="input-demo-disabled">Email</ShadcnFieldLabel>
      <ShadcnInput id="input-demo-disabled" type="email" placeholder="Email" disabled />
      <ShadcnFieldDescription>This field is currently disabled.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputDisabled }
