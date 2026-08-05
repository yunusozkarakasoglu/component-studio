/**
 * ShadcnInputGrid
 * Izgara düzenli çoklu input (saf React, shadcn kaynaklı).
 * @id 626
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldGroup, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputGrid() {
  return (
    <ShadcnFieldGroup className="grid w-full max-w-sm grid-cols-2">
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="first-name">First Name</ShadcnFieldLabel>
        <ShadcnInput id="first-name" placeholder="Jordan" />
      </ShadcnField>
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="last-name">Last Name</ShadcnFieldLabel>
        <ShadcnInput id="last-name" placeholder="Lee" />
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnInputGrid }
