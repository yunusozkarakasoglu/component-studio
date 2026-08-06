/**
 * ShadcnInputGroupText
 * Metin ekleri — para birimi, alan adı, karakter sayacı (saf React, shadcn kaynaklı).
 * @id 669
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
  ShadcnInputGroupText,
  ShadcnInputGroupTextarea,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ShadcnInputGroup>
        <ShadcnInputGroupAddon>
          <ShadcnInputGroupText>$</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupInput placeholder="0.00" />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupText>USD</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupAddon>
          <ShadcnInputGroupText>https://</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
        <ShadcnInputGroupInput placeholder="example.com" />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupText>.com</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Enter your username" />
        <ShadcnInputGroupAddon align="inline-end">
          <ShadcnInputGroupText>@company.com</ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupTextarea placeholder="Enter your message" />
        <ShadcnInputGroupAddon align="block-end">
          <ShadcnInputGroupText className="text-xs text-muted-foreground">
            120 characters left
          </ShadcnInputGroupText>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupTextExample }
