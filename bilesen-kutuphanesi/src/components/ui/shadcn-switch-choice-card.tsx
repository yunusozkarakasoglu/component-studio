/**
 * ShadcnSwitchChoiceCard
 * Tıklanabilir kart — FieldLabel tüm alanı sarar (saf React, shadcn kaynaklı).
 * @id 712
 * @category Switch
 * @subcategory ShadcnSwitch
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldTitle,
} from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

function ShadcnSwitchChoiceCard() {
  return (
    <ShadcnFieldGroup className="w-full max-w-sm">
      <ShadcnFieldLabel htmlFor="shadcn-switch-share" className="cursor-pointer rounded-md border border-border p-3 transition-colors hover:bg-muted/50">
        <ShadcnField orientation="horizontal">
          <ShadcnFieldContent>
            <ShadcnFieldTitle>Share across devices</ShadcnFieldTitle>
            <ShadcnFieldDescription>
              Focus is shared across devices, and turns off when you leave the app.
            </ShadcnFieldDescription>
          </ShadcnFieldContent>
          <ShadcnSwitch id="shadcn-switch-share" />
        </ShadcnField>
      </ShadcnFieldLabel>
      <ShadcnFieldLabel htmlFor="shadcn-switch-notifications" className="cursor-pointer rounded-md border border-border p-3 transition-colors hover:bg-muted/50">
        <ShadcnField orientation="horizontal">
          <ShadcnFieldContent>
            <ShadcnFieldTitle>Enable notifications</ShadcnFieldTitle>
            <ShadcnFieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </ShadcnFieldDescription>
          </ShadcnFieldContent>
          <ShadcnSwitch id="shadcn-switch-notifications" defaultChecked />
        </ShadcnField>
      </ShadcnFieldLabel>
    </ShadcnFieldGroup>
  )
}

export { ShadcnSwitchChoiceCard }
