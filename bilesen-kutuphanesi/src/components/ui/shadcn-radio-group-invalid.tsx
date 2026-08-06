/**
 * ShadcnRadioGroupInvalid
 * Geçersiz durum — aria-invalid (saf React, shadcn kaynaklı).
 * @id 723
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupInvalid() {
  return (
    <ShadcnFieldSet className="w-full max-w-xs">
      <ShadcnFieldLegend variant="label">Notification Preferences</ShadcnFieldLegend>
      <ShadcnFieldDescription>
        Choose how you want to receive notifications.
      </ShadcnFieldDescription>
      <ShadcnRadioGroup defaultValue="email">
        <ShadcnField orientation="horizontal" data-invalid>
          <ShadcnRadioGroupItem value="email" id="shadcn-invalid-email" aria-invalid />
          <ShadcnFieldLabel htmlFor="shadcn-invalid-email" className="font-normal">
            Email only
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal" data-invalid>
          <ShadcnRadioGroupItem value="sms" id="shadcn-invalid-sms" aria-invalid />
          <ShadcnFieldLabel htmlFor="shadcn-invalid-sms" className="font-normal">
            SMS only
          </ShadcnFieldLabel>
        </ShadcnField>
        <ShadcnField orientation="horizontal" data-invalid>
          <ShadcnRadioGroupItem value="both" id="shadcn-invalid-both" aria-invalid />
          <ShadcnFieldLabel htmlFor="shadcn-invalid-both" className="font-normal">
            Both Email & SMS
          </ShadcnFieldLabel>
        </ShadcnField>
      </ShadcnRadioGroup>
    </ShadcnFieldSet>
  )
}

export { ShadcnRadioGroupInvalid }
