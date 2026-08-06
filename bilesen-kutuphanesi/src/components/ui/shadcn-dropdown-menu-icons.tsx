/**
 * ShadcnDropdownMenuIcons
 * İkonlu menü öğeleri (saf React, shadcn kaynaklı).
 * @id 808
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { CreditCard, LogOut, Settings, User } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection } from "@/components/ui/menu"

function ShadcnDropdownMenuIcons() {
  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="My Account">
            <MenuItem id="profile" textValue="Profile">
              <User className="size-4" /> Profile
            </MenuItem>
            <MenuItem id="billing" textValue="Billing">
              <CreditCard className="size-4" /> Billing
            </MenuItem>
            <MenuItem id="settings" textValue="Settings">
              <Settings className="size-4" /> Settings
            </MenuItem>
          </MenuSection>
          <MenuSection>
            <MenuItem id="logout" textValue="Log out" variant="danger">
              <LogOut className="size-4" /> Log out
            </MenuItem>
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuIcons }
