/**
 * ShadcnTextareaField
 * Field compound örneği — etiket + açıklama + metin alanı (saf React, shadcn kaynaklı).
 * @id 638
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldDescription, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnTextareaField() {
  return (
    <ShadcnField>
      <ShadcnFieldLabel htmlFor="textarea-message">Message</ShadcnFieldLabel>
      <ShadcnFieldDescription>Enter your message below.</ShadcnFieldDescription>
      <ShadcnTextarea id="textarea-message" placeholder="Type your message here." />
    </ShadcnField>
  )
}

export { ShadcnTextareaField }
