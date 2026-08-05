/**
 * SelectMultiple
 * Çoklu seçim örneği (saf React).
 * @id 576
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Design", "Engineering", "Marketing", "Sales", "Support"]

function SelectMultiple() {
  return (
    <Select className="relative w-[256px]" placeholder="Select departments" multiple>
      <Label>Departments</Label>
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox>
          {OPTIONS.map((o) => (
            <ListBoxItem key={o} id={o.toLowerCase()} textValue={o}>
              {o}
              <ListBoxItemIndicator />
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { SelectMultiple }
