/**
 * ShadcnInputGroupDemo
 * Temel örnek — ikon + sonuç sayacı (saf React, shadcn kaynaklı).
 * @id 663
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Search } from "@/components/ui/icons"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupDemo() {
  return (
    <ShadcnInputGroup className="max-w-xs">
      <ShadcnInputGroupInput placeholder="Search..." />
      <ShadcnInputGroupAddon>
        <Search className="size-4" />
      </ShadcnInputGroupAddon>
      <ShadcnInputGroupAddon align="inline-end">12 results</ShadcnInputGroupAddon>
    </ShadcnInputGroup>
  )
}

export { ShadcnInputGroupDemo }
