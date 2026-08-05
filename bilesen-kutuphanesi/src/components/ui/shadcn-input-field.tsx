/**
 * ShadcnInputField
 * Field compound — label + input + açıklama (saf React, shadcn kaynaklı).
 * @id 620
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel, ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputField() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="input-field-username">Username</ShadcnFieldLabel>
      <ShadcnInput id="input-field-username" type="text" placeholder="Enter your username" />
      <ShadcnFieldDescription>Choose a unique username for your account.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputField }
