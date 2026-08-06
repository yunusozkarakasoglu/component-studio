/**
 * ShadcnTextareaDisabled
 * Devre dışı örnek — data-disabled + disabled (saf React, shadcn kaynaklı).
 * @id 639
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnTextareaDisabled() {
  return (
    <ShadcnField data-disabled>
      <ShadcnFieldLabel htmlFor="textarea-disabled">Message</ShadcnFieldLabel>
      <ShadcnTextarea id="textarea-disabled" placeholder="Type your message here." disabled />
    </ShadcnField>
  )
}

export { ShadcnTextareaDisabled }
