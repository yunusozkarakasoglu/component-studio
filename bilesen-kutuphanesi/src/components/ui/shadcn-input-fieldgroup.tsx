/**
 * ShadcnInputFieldgroup
 * FieldGroup — birden çok alan + form butonları (saf React, shadcn kaynaklı).
 * @id 621
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldGroup, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputFieldgroup() {
  return (
    <ShadcnFieldGroup className="w-full max-w-sm">
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="fieldgroup-name">Name</ShadcnFieldLabel>
        <ShadcnInput id="fieldgroup-name" placeholder="Jordan Lee" />
      </ShadcnField>
      <ShadcnField>
        <ShadcnFieldLabel htmlFor="fieldgroup-email">Email</ShadcnFieldLabel>
        <ShadcnInput id="fieldgroup-email" type="email" placeholder="name@example.com" />
        <ShadcnFieldDescription>We&apos;ll send updates to this address.</ShadcnFieldDescription>
      </ShadcnField>
      <ShadcnField orientation="horizontal">
        <Button type="reset" variant="outline">Reset</Button>
        <Button type="submit">Submit</Button>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnInputFieldgroup }
