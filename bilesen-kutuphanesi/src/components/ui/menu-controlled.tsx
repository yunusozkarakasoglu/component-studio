/**
 * MenuControlled
 * Kontrollü örnek — seçim durumu göstergesi (saf React).
 * @id 479
 * @category Overlay
 * @subcategory Menu
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Menu, MenuItem, MenuItemIndicator, MenuList, MenuPopover } from "@/components/ui/menu"

function MenuControlled() {
  const [selected, setSelected] = useState<string[]>([])
  const [lastAction, setLastAction] = useState("(none)")

  return (
    <div className="flex flex-col gap-4">
      <Menu selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected} onAction={(k) => setLastAction(k)}>
        <Button aria-label="Menu" variant="secondary">Choose view</Button>
        <MenuPopover>
          <MenuList>
            <MenuItem id="grid" textValue="Grid view">
              <Label>Grid view</Label>
              {selected.includes("grid") && <MenuItemIndicator />}
            </MenuItem>
            <MenuItem id="list" textValue="List view">
              <Label>List view</Label>
              {selected.includes("list") && <MenuItemIndicator />}
            </MenuItem>
            <MenuItem id="table" textValue="Table view">
              <Label>Table view</Label>
              {selected.includes("table") && <MenuItemIndicator />}
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
      <p className="text-sm text-muted-foreground">
        Last action: <span className="font-medium text-foreground">{lastAction}</span> · Selected:{" "}
        <span className="font-medium text-foreground">{selected.join(", ") || "(none)"}</span>
      </p>
    </div>
  )
}

export { MenuControlled }
