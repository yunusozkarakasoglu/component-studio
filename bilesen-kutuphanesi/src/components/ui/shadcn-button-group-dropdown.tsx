/**
 * ShadcnButtonGroupDropdown
 * Açılır menü ekli grup (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 764
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { ChevronDown } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"

function ShadcnButtonGroupDropdown() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButton variant="outline">Search</ShadcnButton>
      <Menu>
        <ShadcnButton variant="outline" size="icon" aria-label="Search options">
          <ChevronDown className="size-4" />
        </ShadcnButton>
        <MenuPopover>
          <MenuList>
            <MenuItem id="docs" textValue="Documentation">Documentation</MenuItem>
            <MenuItem id="blog" textValue="Blog Posts">Blog Posts</MenuItem>
            <MenuItem id="changelog" textValue="Changelog">Changelog</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupDropdown }
