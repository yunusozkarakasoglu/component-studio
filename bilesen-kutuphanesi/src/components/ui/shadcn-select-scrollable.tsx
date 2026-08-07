/**
 * ShadcnSelectScrollable
 * Kaydırılabilir seçim listesi (saf React, shadcn kaynaklı).
 * @id 915
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"

const manyItems = Array.from({ length: 20 }, (_, i) => ({ value: `item-${i}`, label: `Item ${i + 1}` }))

function ShadcnSelectScrollable() {
  return (
    <Select className="relative w-full max-w-48" placeholder="Select an item">
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox className="max-h-48 overflow-y-auto">
          {manyItems.map((item) => (
            <ListBoxItem key={item.value} id={item.value} textValue={item.label}>
              {item.label}
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { ShadcnSelectScrollable }
