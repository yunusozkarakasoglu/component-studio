/**
 * ShadcnSelectDemo
 * Temel örnek — meyve seçimi (saf React, shadcn kaynaklı).
 * Select: kütüphanenin mevcut bileşeni (Heroui — saf React, API uyumlu).
 * @id 913
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
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function ShadcnSelectDemo() {
  return (
    <Select className="relative w-full max-w-48" placeholder="Select a fruit">
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
  )
}

export { ShadcnSelectDemo }
