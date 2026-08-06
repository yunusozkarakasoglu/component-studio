/**
 * ShadcnFieldSelect
 * Field + Select — departman seçimi (saf React, shadcn kaynaklı).
 * Select: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 653
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldLabel,
} from "@/components/ui/shadcn-field"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"

const items = [
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Customer Support", value: "support" },
]

function ShadcnFieldSelect() {
  return (
    <ShadcnField className="w-full max-w-xs">
      <ShadcnFieldLabel>Department</ShadcnFieldLabel>
      <Select className="relative" placeholder="Choose department">
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectPopover>
          <ListBox>
            {items.map((item) => (
              <ListBoxItem key={item.value} id={item.value} textValue={item.label}>
                {item.label}
                <ListBoxItemIndicator />
              </ListBoxItem>
            ))}
          </ListBox>
        </SelectPopover>
      </Select>
      <ShadcnFieldDescription>
        Select your department or area of work.
      </ShadcnFieldDescription>
    </ShadcnField>
  )
}

export { ShadcnFieldSelect }
