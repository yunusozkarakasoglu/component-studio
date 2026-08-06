/**
 * ShadcnDropdownMenuShortcuts
 * Kısayollar — klavye tuşları (saf React, shadcn kaynaklı).
 * Kbd: kütüphanenin mevcut ShadcnKbd'si.
 * @id 807
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection } from "@/components/ui/menu"
import { ShadcnKbd } from "@/components/ui/shadcn-kbd"

function ShadcnDropdownMenuShortcuts() {
  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="Suggestions">
            <MenuItem id="profile" textValue="Profile">
              Profile <ShadcnKbd>⇧⌘P</ShadcnKbd>
            </MenuItem>
            <MenuItem id="billing" textValue="Billing">
              Billing <ShadcnKbd>⌘B</ShadcnKbd>
            </MenuItem>
            <MenuItem id="settings" textValue="Settings">
              Settings <ShadcnKbd>⌘S</ShadcnKbd>
            </MenuItem>
            <MenuItem id="new-team" textValue="New Team">
              New Team <ShadcnKbd>⌘T</ShadcnKbd>
            </MenuItem>
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuShortcuts }
