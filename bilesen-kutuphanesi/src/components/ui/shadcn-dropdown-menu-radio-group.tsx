/**
 * ShadcnDropdownMenuRadioGroup
 * Radyo seçimli menü (saf React, shadcn kaynaklı).
 * @id 810
 * @category Overlay
 * @subcategory ShadcnDropdownMenu
 * @source shadcn
 */
import { useState } from "react"
import { Check } from "@/components/ui/icons"
import { Menu, MenuItem, MenuList, MenuPopover, MenuSection } from "@/components/ui/menu"

function ShadcnDropdownMenuRadioGroupDemo() {
  const [person, setPerson] = useState("pedro")

  const people = [
    { id: "pedro", label: "Pedro Duarte" },
    { id: "colm", label: "Colm Tuite" },
    { id: "toni", label: "Toni Castillo" },
  ]

  return (
    <Menu>
      <button type="button" className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/40">
        Open
      </button>
      <MenuPopover>
        <MenuList>
          <MenuSection title="Assigned to">
            {people.map((p) => (
              <MenuItem key={p.id} id={p.id} textValue={p.label} onAction={() => setPerson(p.id)}>
                <span className="flex w-4 items-center">
                  {person === p.id && <Check className="size-4" />}
                </span>
                {p.label}
              </MenuItem>
            ))}
          </MenuSection>
        </MenuList>
      </MenuPopover>
    </Menu>
  )
}

export { ShadcnDropdownMenuRadioGroupDemo }
