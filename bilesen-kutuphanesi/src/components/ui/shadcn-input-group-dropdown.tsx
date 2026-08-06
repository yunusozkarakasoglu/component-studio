/**
 * ShadcnInputGroupDropdown
 * Açılır menü ekli gruplar (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 672
 * @category Form Elemanları
 * @subcategory ShadcnInputGroup
 * @source shadcn
 */
import { ChevronDown } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"
import {
  ShadcnInputGroup,
  ShadcnInputGroupAddon,
  ShadcnInputGroupButton,
  ShadcnInputGroupInput,
} from "@/components/ui/shadcn-input-group"

function ShadcnInputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Enter file name" />
        <ShadcnInputGroupAddon align="inline-end">
          <Menu>
            <ShadcnInputGroupButton variant="ghost" aria-label="More" size="icon-xs">⋯</ShadcnInputGroupButton>
            <MenuPopover>
              <MenuList>
                <MenuItem id="settings" textValue="Settings">Settings</MenuItem>
                <MenuItem id="copy-path" textValue="Copy path">Copy path</MenuItem>
                <MenuItem id="open-location" textValue="Open location">Open location</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
      <ShadcnInputGroup>
        <ShadcnInputGroupInput placeholder="Enter search query" />
        <ShadcnInputGroupAddon align="inline-end">
          <Menu>
            <ShadcnInputGroupButton variant="ghost" className="pr-1.5 text-xs">
              Search In... <ChevronDown className="size-3" />
            </ShadcnInputGroupButton>
            <MenuPopover>
              <MenuList>
                <MenuItem id="docs" textValue="Documentation">Documentation</MenuItem>
                <MenuItem id="blog" textValue="Blog Posts">Blog Posts</MenuItem>
                <MenuItem id="changelog" textValue="Changelog">Changelog</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </ShadcnInputGroupAddon>
      </ShadcnInputGroup>
    </div>
  )
}

export { ShadcnInputGroupDropdown }
