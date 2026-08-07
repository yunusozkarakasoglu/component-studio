/**
 * ShadcnSelectDisabled
 * Devre dışı seçim + devre dışı öğe (saf React, shadcn kaynaklı).
 * @id 916
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes", disabled: true },
  { value: "pineapple", label: "Pineapple" },
]

function ShadcnSelectDisabled() {
  return (
    <Select className="relative w-full max-w-48" placeholder="Select a fruit" isDisabled>
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox>
          {items.map((item) => (
            <ListBoxItem key={item.value} id={item.value} textValue={item.label} isDisabled={item.disabled}>
              {item.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { ShadcnSelectDisabled }
