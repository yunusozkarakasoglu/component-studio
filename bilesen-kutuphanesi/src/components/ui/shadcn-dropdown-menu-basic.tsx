/**
 * ShadcnDropdownMenuBasic
 * Temel menü (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 806
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection, MenuSeparator } from "@/components/ui/menu"

function ShadcnDropdownMenuBasic() {
  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="My Account">
            <MenuItem id="profile" textValue="Profile">Profile</MenuItem>
            <MenuItem id="billing" textValue="Billing">Billing</MenuItem>
            <MenuItem id="settings" textValue="Settings">Settings</MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem id="github" textValue="GitHub">GitHub</MenuItem>
          <MenuItem id="support" textValue="Support">Support</MenuItem>
          <MenuItem id="api" textValue="API" isDisabled>API</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuBasic }
