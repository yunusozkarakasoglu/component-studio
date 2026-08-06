/**
 * ShadcnFieldGroupExample
 * FieldGroup + FieldSeparator — bildirim tercihleri (saf React, shadcn kaynaklı).
 * Checkbox: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 660
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import { Checkbox } from "@/components/ui/checkbox"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldSeparator,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"

function ShadcnFieldGroupExample() {
  return (
    <ShadcnFieldGroup className="w-full max-w-xs">
      <ShadcnFieldSet>
        <ShadcnFieldLabel>Responses</ShadcnFieldLabel>
        <ShadcnFieldDescription>
          Get notified when ChatGPT responds to requests that take time, like
          research or image generation.
        </ShadcnFieldDescription>
        <ShadcnFieldGroup>
          <ShadcnField orientation="horizontal">
            <Checkbox label="Push notifications" defaultSelected isDisabled />
          </ShadcnField>
        </ShadcnFieldGroup>
      </ShadcnFieldSet>
      <ShadcnFieldSeparator />
      <ShadcnFieldSet>
        <ShadcnFieldLabel>Tasks</ShadcnFieldLabel>
        <ShadcnFieldDescription>
          Get notified when tasks you&apos;ve created have updates.
        </ShadcnFieldDescription>
        <ShadcnFieldGroup>
          <ShadcnField orientation="horizontal">
            <Checkbox label="Push notifications" />
          </ShadcnField>
          <ShadcnField orientation="horizontal">
            <Checkbox label="Email notifications" />
          </ShadcnField>
        </ShadcnFieldGroup>
      </ShadcnFieldSet>
    </ShadcnFieldGroup>
  )
}

export { ShadcnFieldGroupExample }
