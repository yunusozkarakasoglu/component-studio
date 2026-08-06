/**
 * ShadcnTextareaInvalid
 * Geçersiz örnek — data-invalid + aria-invalid (saf React, shadcn kaynaklı).
 * @id 640
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnTextareaInvalid() {
  return (
    <ShadcnField data-invalid>
      <ShadcnFieldLabel htmlFor="textarea-invalid">Message</ShadcnFieldLabel>
      <ShadcnTextarea id="textarea-invalid" placeholder="Type your message here." aria-invalid />
      <ShadcnFieldDescription>Please enter a valid message.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnTextareaInvalid }
