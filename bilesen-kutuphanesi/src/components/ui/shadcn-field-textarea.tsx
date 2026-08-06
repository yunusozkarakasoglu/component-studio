/**
 * ShadcnFieldTextarea
 * Field + Textarea — geri bildirim (saf React, shadcn kaynaklı).
 * @id 652
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
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnFieldTextarea() {
  return (
    <ShadcnFieldSet className="w-full max-w-xs">
      <ShadcnFieldGroup>
        <ShadcnField>
          <ShadcnFieldLabel htmlFor="field-textarea-feedback">Feedback</ShadcnFieldLabel>
          <ShadcnTextarea id="field-textarea-feedback" placeholder="Your feedback helps us improve..." rows={4} />
          <ShadcnFieldDescription>
            Share your thoughts about our service.
          </ShadcnFieldDescription>
        </ShadcnField>
      </ShadcnFieldGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnFieldTextarea }
