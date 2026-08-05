/**
 * SelectRequired
 * Zorunlu alan örneği (saf React).
 * @id 573
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Starter", "Pro", "Teams"]

function SelectRequired() {
  return (
    <Select className="relative w-[256px]" placeholder="Choose a plan" isRequired>
      <Label>Plan</Label>
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

export { SelectRequired }
