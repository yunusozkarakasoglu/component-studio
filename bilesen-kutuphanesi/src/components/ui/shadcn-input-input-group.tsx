/**
 * ShadcnInputInputGroup
 * InputGroup içinde input — ikon + metin addon (saf React, shadcn kaynaklı).
 * @id 629
 * @category Form Elemanları
 * @subcategory ShadcnInput
 * @source shadcn
 */
import { Info } from "@/components/ui/icons"
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import { ShadcnInputGroup, ShadcnInputGroupAddon, ShadcnInputGroupInput, ShadcnInputGroupText } from "@/components/ui/shadcn-input-group"

function ShadcnInputInputGroup() {
  return (
    <ShadcnField className="w-full max-w-72">
      <ShadcnFieldLabel htmlFor="input-group-url">Website URL</ShadcnFieldLabel>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput id="input-group-url" placeholder="example.com" />
        <ShadcnInputGroupAddon>
          <ShadcnInputGroupText>https://</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupAddon align="inline-end">
          <Info className="size-4" />
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </ShadcnField>
  )
}

export { ShadcnInputInputGroup }
