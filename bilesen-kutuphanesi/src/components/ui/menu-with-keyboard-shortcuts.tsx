/**
 * MenuWithKeyboardShortcuts
 * Kısayol gösterimli örnek (saf React).
 * Kbd bileşeni gelmediği için kısayollar span ile gösterilir.
 * @id 483
 * @category Overlay
 * @subcategory Menu
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuList, MenuPopover } from "@/components/ui/menu"

const Kbd = ({ children }: { children: string }) => (
  <span className="ms-auto rounded border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{children}</span>
)

function MenuWithKeyboardShortcuts() {
  return (
    <Menu>
      <Button aria-label="Menu" variant="secondary">Format</Button>
      <MenuPopover>
        <MenuList onAction={(key) => console.log(`Selected: ${key}`)}>
          <MenuItem id="bold" textValue="Bold"><Label>Bold</Label><Kbd>⌘B</Kbd></MenuItem>
          <MenuItem id="italic" textValue="Italic"><Label>Italic</Label><Kbd>⌘I</Kbd></MenuItem>
          <MenuItem id="underline" textValue="Underline"><Label>Underline</Label><Kbd>⌘U</Kbd></MenuItem>
          <MenuItem id="strikethrough" textValue="Strikethrough"><Label>Strikethrough</Label><Kbd>⌘⇧X</Kbd></MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { MenuWithKeyboardShortcuts }
