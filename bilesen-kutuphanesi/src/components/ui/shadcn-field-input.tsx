/**
 * ShadcnFieldInput
 * Field + Input — kullanıcı adı/şifre (saf React, shadcn kaynaklı).
 * @id 651
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnFieldInput() {
  return (
    <ShadcnFieldSet className="w-full max-w-xs">
      <ShadcnFieldGroup>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="field-input-username">Username</ShadcnFieldLabel>
          <ShadcnInput id="field-input-username" type="text" placeholder="Max Leiter" />
          <ShadcnFieldDescription>
            Choose a unique username for your account.
          </ShadcnFieldDescription>
        </ShadcnField>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="field-input-password">Password</ShadcnFieldLabel>
          <ShadcnFieldDescription>
            Must be at least 8 characters long.
          </ShadcnFieldDescription>
          <ShadcnInput id="field-input-password" type="password" placeholder="••••••••" />
        </ShadcnField>
      </ShadcnFieldGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnFieldInput }
