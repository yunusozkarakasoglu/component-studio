/**
 * ShadcnDropdownMenuDestructive
 * Yıkıcı eylem öğesi (saf React, shadcn kaynaklı).
 * @id 811
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { Trash } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection } from "@/components/ui/menu"

function ShadcnDropdownMenuDestructive() {
  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="Danger Zone">
            <MenuItem id="delete" textValue="Delete" variant="danger">
              <Trash className="size-4" /> Delete project
            </MenuItem>
            <MenuItem id="revoke" textValue="Revoke access" variant="danger">
              Revoke access
            </MenuItem>
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuDestructive }
