/**
 * ShadcnDropdownMenuCheckboxes
 * Onay işaretli öğeler (saf React, shadcn kaynaklı).
 * @id 809
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { useState } from "react"
import { Check } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection } from "@/components/ui/menu"

function ShadcnDropdownMenuCheckboxes() {
  const [selected, setSelected] = useState<string[]>(["show-status"])

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const items = [
    { id: "show-status", label: "Show Status Bar" },
    { id: "show-activity", label: "Show Activity" },
    { id: "show-avatars", label: "Show Avatars" },
  ]

  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="Panel">
            {items.map((item) => (
              <MenuItem key={item.id} id={item.id} textValue={item.label} onAction={() => toggle(item.id)}>
                <span className="flex w-4 items-center">
                  {selected.includes(item.id) && <Check className="size-4" />}
                </span>
                {item.label}
              </MenuItem>
            ))}
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuCheckboxes }
