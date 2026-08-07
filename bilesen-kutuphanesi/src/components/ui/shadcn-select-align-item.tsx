/**
 * ShadcnSelectAlignItem
 * Trigger ile hizalama — Switch ile aç/kapat (saf React, shadcn kaynaklı).
 * @id 918
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { useState } from "react"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"
import {
  ShadcnField,
  ShadcnFieldContent,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { ShadcnSwitch } from "@/components/ui/shadcn-switch"

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
]

function ShadcnSelectAlignItem() {
  const [align, setAlign] = useState(true)

  return (
    <ShadcnFieldGroup className="w-full max-w-xs">
      <ShadcnField orientation="horizontal">
        <ShadcnFieldContent>
          <ShadcnFieldLabel>Align Item</ShadcnFieldLabel>
          <ShadcnFieldDescription>
            Toggle to align the item with the trigger.
          </ShadcnFieldDescription>
        </ShadcnFieldContent>
        <ShadcnSwitch checked={align} onCheckedChange={setAlign} />
      </ShadcnField>
      <ShadcnField>
        <Select className="relative" placeholder="Select a fruit" defaultValue="banana">
          <SelectTrigger>
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <SelectPopover className={align ? "" : "mt-0"}>
            <ListBox>
              {items.map((item) => (
                <ListBoxItem key={item.value} id={item.value} textValue={item.label}>
                  {item.label}
                </ListBoxItem>
              ))}
            </ListBox>
          </SelectPopover>
        </Select>
      </ShadcnField>
    </ShadcnFieldGroup>
  )
}

export { ShadcnSelectAlignItem }
