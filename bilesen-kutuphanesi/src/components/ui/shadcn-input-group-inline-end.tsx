/**
 * ShadcnInputGroupInlineEnd
 * align=inline-end — sonda ikon (saf React, shadcn kaynaklı).
 * @id 665
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { EyeOff } from "@/components/ui/icons"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupInlineEnd() {
  return (
    <ShadcnField className="max-w-sm">
      <ShadcnFieldLabel htmlFor="ig-inline-end-input">Input</ShadcnFieldLabel>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput id="ig-inline-end-input" type="password" placeholder="Enter password" />
        <ShadcnInputGroupAddon align="inline-end">
          <EyeOff className="size-4" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnFieldDescription>Icon positioned at the end.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputGroupInlineEnd }
