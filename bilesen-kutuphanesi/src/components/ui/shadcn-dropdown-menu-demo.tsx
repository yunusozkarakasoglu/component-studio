/**
 * ShadcnDropdownMenuDemo
 * Kapsamlı örnek — hesap menüsü (saf React, shadcn kaynaklı).
 * Menu: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 805
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { LogOut } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection, MenuSeparator } from "@/components/ui/menu"
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"

function ShadcnDropdownMenuDemo() {
  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="My Account">
            <MenuItem id="profile" textValue="Profile">
              Profile <ShadcnKbd>⇧⌘P</ShadcnKbd>
            </MenuItem>
            <MenuItem id="billing" textValue="Billing">
              Billing <ShadcnKbd>⌘B</ShadcnKbd>
            </MenuItem>
            <MenuItem id="settings" textValue="Settings">
              Settings <ShadcnKbd>⌘S</ShadcnKbd>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem id="team" textValue="Team">Team</MenuItem>
            <MenuItem id="invite" textValue="Invite users">Invite users</MenuItem>
            <MenuItem id="new-team" textValue="New Team">
              New Team <ShadcnKbd>⌘T</ShadcnKbd>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem id="github" textValue="GitHub">GitHub</MenuItem>
            <MenuItem id="support" textValue="Support">Support</MenuItem>
            <MenuItem id="api" textValue="API" isDisabled>API</MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem id="logout" textValue="Log out">
            <LogOut className="size-4" /> Log out <ShadcnKbd>⇧⌘Q</ShadcnKbd>
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuDemo }
