/**
 * MenuWithIcons
 * İkonlu örnek — kısayol gösterimi span ile (saf React).
 * Kbd bileşeni gelmediği için ⌘N gibi kısayollar span ile gösterilir.
 * @id 474
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { FolderOpen, Save, SquarePlus, Trash } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

const Kbd = ({ children }: { children: string }) => (
  <span className="ms-auto rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{children}</span>
)

function MenuWithIcons() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">Actions</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="new-file" textValue="New file">
            <SquarePlus className="size-4 shrink-0 text-muted-foreground" />
            <Label>New file</Label>
            <Kbd>⌘N</Kbd>
          </MenuItem>
          <MenuItem id="open-file" textValue="Open file">
            <FolderOpen className="size-4 shrink-0 text-muted-foreground" />
            <Label>Open file</Label>
            <Kbd>⌘O</Kbd>
          </MenuItem>
          <MenuItem id="save-file" textValue="Save file">
            <Save className="size-4 shrink-0 text-muted-foreground" />
            <Label>Save file</Label>
            <Kbd>⌘S</Kbd>
          </MenuItem>
          <MenuItem id="delete-file" textValue="Delete file" variant="danger">
            <Trash className="size-4 shrink-0 text-red-500" />
            <Label>Delete file</Label>
            <Kbd>⌘⇧D</Kbd>
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuWithIcons }
