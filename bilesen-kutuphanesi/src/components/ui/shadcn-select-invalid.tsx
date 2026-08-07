/**
 * ShadcnSelectInvalid
 * Geçersiz durum — data-invalid (saf React, shadcn kaynaklı).
 * @id 917
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"
import { ShadcnField, ShadcnFieldError, ShadcnFieldLabel } from "@/components/ui/shadcn-field"

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
]

function ShadcnSelectInvalid() {
  return (
    <ShadcnField className="w-full max-w-48" data-invalid>
      <ShadcnFieldLabel>Fruit</ShadcnFieldLabel>
      <Select className="relative" placeholder="Select a fruit" aria-invalid>
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectPopover>
          <ListBox>
            {items.map((item) => (
              <ListBoxItem key={item.value} id={item.value} textValue={item.label}>
                {item.label}
              </ListBoxItem>
            ))}
          </ListBox>
        </SelectPopover>
      </Select>
      <ShadcnFieldError>Please select a fruit.</ShadcnFieldError>
    </ShadcnField>
  )
}

export { ShadcnSelectInvalid }
