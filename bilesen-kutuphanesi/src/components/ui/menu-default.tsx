/**
 * MenuDefault
 * Temel örnek: dosya aksiyonları menüsü (saf React).
 * @id 473
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuDefault() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">Actions</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="new-file" textValue="New file"><Label>New file</Label></MenuItem>
          <MenuItem id="copy-link" textValue="Copy link"><Label>Copy link</Label></MenuItem>
          <MenuItem id="edit-file" textValue="Edit file"><Label>Edit file</Label></MenuItem>
          <MenuItem id="delete-file" textValue="Delete file" variant="danger"><Label>Delete file</Label></MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuDefault }
