/**
 * MenuSingleSelection
 * Tekli seçim örneği (saf React).
 * @id 480
 * @category Overlay
 * @subcategory Menu
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuItemIndicator, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuSingleSelection() {
  const [selected, setSelected] = useState<string[]>(["tr"])

  return (
    <Menu selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
      <Button aria-label="Menu" variant="secondary">Language</Button>
      <MenuPopover>
        <MenuList>
          <MenuItem id="tr" textValue="Türkçe">
            <Label>Türkçe</Label>
            {selected.includes("tr") && <MenuItemIndicator />}
          </MenuItem>
          <MenuItem id="en" textValue="English">
            <Label>English</Label>
            {selected.includes("en") && <MenuItemIndicator />}
          </MenuItem>
          <MenuItem id="de" textValue="Deutsch">
            <Label>Deutsch</Label>
            {selected.includes("de") && <MenuItemIndicator />}
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuSingleSelection }
