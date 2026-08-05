/**
 * ShadcnInputForm
 * Tam form örneği — çoklu input + buton (saf React, shadcn kaynaklı).
 * @id 631
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnField, ShadcnFieldGroup, ShadcnFieldLabel, ShadcnInput } from "@/components/ui/shadcn-input"

function ShadcnInputForm() {
  return (
    <form className="w-full max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
      <ShadcnFieldGroup>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="form-email">Email</ShadcnFieldLabel>
          <ShadcnInput id="form-email" type="email" placeholder="you@example.com" required />
        </ShadcnField>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="form-password">Password</ShadcnFieldLabel>
          <ShadcnInput id="form-password" type="password" placeholder="••••••••" required />
        </ShadcnField>
      </ShadcnFieldGroup>
      <Button type="submit" className="w-full">Sign in</Button>
    </form>
  )
}

export { ShadcnInputForm }
