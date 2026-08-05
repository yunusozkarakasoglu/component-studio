/**
 * MenuWithDescriptions
 * Açıklamalı örnek (saf React).
 * @id 475
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { FolderOpen, Save, SquarePlus } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuWithDescriptions() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">Actions</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="new-file" textValue="New file">
            <SquarePlus className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex flex-col">
              <Label>New file</Label>
              <Description>Create a new file</Description>
            </div>
          </MenuItem>
          <MenuItem id="open-file" textValue="Open file">
            <FolderOpen className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex flex-col">
              <Label>Open file</Label>
              <Description>Open an existing file</Description>
            </div>
          </MenuItem>
          <MenuItem id="save-file" textValue="Save file">
            <Save className="size-4 shrink-0 text-muted-foreground" />
            <div className="flex flex-col">
              <Label>Save file</Label>
              <Description>Save the current file</Description>
            </div>
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuWithDescriptions }
