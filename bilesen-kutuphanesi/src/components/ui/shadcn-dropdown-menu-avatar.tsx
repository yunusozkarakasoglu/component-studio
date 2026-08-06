/**
 * ShadcnDropdownMenuAvatar
 * Avatar menüsü — profil (saf React, shadcn kaynaklı).
 * @id 812
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { LogOut, Settings, User } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection, MenuSeparator } from "@/components/ui/menu"

function ShadcnDropdownMenuAvatar() {
  return (
    <Menu>
      <button
        type="button"
        aria-label="Account"
        className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-muted text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted/80 focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <User className="size-4" />
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="Signed in as">
            <div className="px-2.5 py-2 text-sm">
              <p className="font-medium">Pedro Duarte</p>
              <p className="text-muted-foreground">pedro@example.com</p>
            </div>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem id="profile" textValue="Profile">
              <User className="size-4" /> Profile
            </MenuItem>
            <MenuItem id="settings" textValue="Settings">
              <Settings className="size-4" /> Settings
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem id="logout" textValue="Log out" variant="danger">
            <LogOut className="size-4" /> Log out
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuAvatar }
