/**
 * MenuWithSections
 * Bölüm başlıklı örnek (saf React).
 * @id 477
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection, MenuSeparator } from "@/components/ui/menu"

function MenuWithSections() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">File</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuSection title="File">
            <MenuItem id="new" textValue="New"><Label>New</Label></MenuItem>
            <MenuItem id="open" textValue="Open"><Label>Open</Label></MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection title="Actions">
            <MenuItem id="save" textValue="Save"><Label>Save</Label></MenuItem>
            <MenuItem id="export" textValue="Export"><Label>Export</Label></MenuItem>
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuWithSections }
