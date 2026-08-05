/**
 * MenuLongPress
 * Uzun basma tetiklemeli örnek (saf React).
 * Basit sürüm: tıklama ile açılır (uzun basma simülasyonu için açılış gecikmesi).
 * @id 482
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuLongPress() {
  return (
    <Menu>
      <Button aria-label="Long press" variant="secondary">
        Actions
      </Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="quick-add" textValue="Quick add"><Label>Quick add</Label></MenuItem>
          <MenuItem id="duplicate" textValue="Duplicate"><Label>Duplicate</Label></MenuItem>
          <MenuItem id="archive" textValue="Archive"><Label>Archive</Label></MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuLongPress }
