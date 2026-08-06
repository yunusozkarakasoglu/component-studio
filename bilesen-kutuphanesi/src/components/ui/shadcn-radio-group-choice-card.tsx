/**
 * ShadcnRadioGroupChoiceCard
 * Tıklanabilir plan kartları (saf React, shadcn kaynaklı).
 * @id 720
 * @category RadioGroup
 * @subcategory ShadcnRadioGroup
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
  ShadcnFieldTitle,
} from "@/components/ui/shadcn-field"
import { ShadcnRadioGroup, ShadcnRadioGroupItem } from "@/components/ui/shadcn-radio-group"

function ShadcnRadioGroupChoiceCard() {
  return (
    <ShadcnRadioGroup defaultValue="plus" className="max-w-sm">
      <ShadcnFieldLabel htmlFor="shadcn-plus-plan" className="cursor-pointer rounded-md border border-border p-3 transition-colors hover:bg-muted/50">
        <ShadcnField orientation="horizontal">
          <ShadcnFieldContent>
            <ShadcnFieldTitle>Plus</ShadcnFieldTitle>
            <ShadcnFieldDescription>For individuals and small teams.</ShadcnFieldDescription>
          </ShadcnFieldContent>
          <ShadcnRadioGroupItem value="plus" id="shadcn-plus-plan" />
        </ShadcnField>
      </ShadcnFieldLabel>
      <ShadcnFieldLabel htmlFor="shadcn-pro-plan" className="cursor-pointer rounded-md border border-border p-3 transition-colors hover:bg-muted/50">
        <ShadcnField orientation="horizontal">
          <ShadcnFieldContent>
            <ShadcnFieldTitle>Pro</ShadcnFieldTitle>
            <ShadcnFieldDescription>For growing businesses.</ShadcnFieldDescription>
          </ShadcnFieldContent>
          <ShadcnRadioGroupItem value="pro" id="shadcn-pro-plan" />
        </ShadcnField>
      </ShadcnFieldLabel>
      <ShadcnFieldLabel htmlFor="shadcn-enterprise-plan" className="cursor-pointer rounded-md border border-border p-3 transition-colors hover:bg-muted/50">
        <ShadcnField orientation="horizontal">
          <ShadcnFieldContent>
            <ShadcnFieldTitle>Enterprise</ShadcnFieldTitle>
            <ShadcnFieldDescription>For large teams and enterprises.</ShadcnFieldDescription>
          </ShadcnFieldContent>
          <ShadcnRadioGroupItem value="enterprise" id="shadcn-enterprise-plan" />
        </ShadcnField>
      </ShadcnFieldLabel>
    </ShadcnRadioGroup>
  )
}

export { ShadcnRadioGroupChoiceCard }
