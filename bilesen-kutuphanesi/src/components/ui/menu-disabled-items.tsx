/**
 * MenuDisabledItems
 * Devre dışı öğe örneği (saf React).
 * @id 476
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuDisabledItems() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">Edit</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="undo" textValue="Undo"><Label>Undo</Label></MenuItem>
          <MenuItem id="redo" textValue="Redo" isDisabled><Label>Redo</Label></MenuItem>
          <MenuItem id="cut" textValue="Cut"><Label>Cut</Label></MenuItem>
          <MenuItem id="paste" textValue="Paste"><Label>Paste</Label></MenuItem>
          <MenuItem id="delete" textValue="Delete" variant="danger" isDisabled><Label>Delete</Label></MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuDisabledItems }
