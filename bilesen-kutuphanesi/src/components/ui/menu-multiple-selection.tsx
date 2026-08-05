/**
 * MenuMultipleSelection
 * Çoklu seçim örneği (saf React).
 * @id 478
 * @category Overlay
 * @subcategory Menu
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuItemIndicator, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuMultipleSelection() {
  const [selected, setSelected] = useState<string[]>(["new", "save"])

  return (
    <Menu selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
      <Button aria-label="Menu" variant="secondary">Select tools</Button>
      <MenuPopover>
        <MenuList>
          <MenuItem id="new" textValue="New file">
            <Label>New file</Label>
            {selected.includes("new") && <MenuItemIndicator />}
          </MenuItem>
          <MenuItem id="open" textValue="Open file">
            <Label>Open file</Label>
            {selected.includes("open") && <MenuItemIndicator />}
          </MenuItem>
          <MenuItem id="save" textValue="Save file">
            <Label>Save file</Label>
            {selected.includes("save") && <MenuItemIndicator />}
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuMultipleSelection }
