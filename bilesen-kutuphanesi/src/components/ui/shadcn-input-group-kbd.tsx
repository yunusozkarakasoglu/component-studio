/**
 * ShadcnInputGroupKbd
 * Kısayol tuşu ekli arama (saf React, shadcn kaynaklı).
 * Kbd: kütüphanenin mevcut ShadcnKbd'si.
 * @id 671
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { Search } from "@/components/ui/icons"
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupKbd() {
  return (
    <ShadcnInputGroup className="max-w-sm">
      <ShadcnInputGroupInput placeholder="Search..." />
      <ShadcnInputGroupAddon>
        <Search className="size-4 text-muted-foreground" />
      </ShadcnInputGroupAddon>
      <ShadcnInputGroupAddon align="inline-end">
        <ShadcnKbd>⌘K</ShadcnKbd>
      </ShadcnInputGroupAddon>
    </ShadcnInputGroup>
  )
}

export { ShadcnInputGroupKbd }
