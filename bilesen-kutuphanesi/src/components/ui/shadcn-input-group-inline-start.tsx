/**
 * ShadcnInputGroupInlineStart
 * align=inline-start — başta ikon (saf React, shadcn kaynaklı).
 * @id 664
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Search } from "@/components/ui/icons"
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

function ShadcnInputGroupInlineStart() {
  return (
    <ShadcnField className="max-w-sm">
      <ShadcnFieldLabel htmlFor="ig-inline-start-input">Input</ShadcnFieldLabel>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput id="ig-inline-start-input" placeholder="Search..." />
        <ShadcnInputGroupAddon align="inline-start">
          <Search className="size-4 text-muted-foreground" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnFieldDescription>Icon positioned at the start.</ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnInputGroupInlineStart }
