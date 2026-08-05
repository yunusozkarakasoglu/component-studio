/**
 * SelectDefault
 * Temel örnek: eyalet seçimi (saf React).
 * @id 569
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const STATES = ["Florida", "Delaware", "California", "Texas", "New York", "Washington"]

function SelectDefault() {
  return (
    <Select className="relative w-[256px]" placeholder="Select one">
      <Label>State</Label>
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox>
          {STATES.map((s) => (
            <ListBoxItem key={s} id={s.toLowerCase()} textValue={s}>
              {s}
              <ListBoxItemIndicator />
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { SelectDefault }
