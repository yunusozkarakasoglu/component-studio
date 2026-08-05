/**
 * SelectDisabled
 * Devre dışı örnek (saf React).
 * @id 574
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Free", "Pro", "Team"]

function SelectDisabled() {
  return (
    <Select className="relative w-[256px]" placeholder="Select a plan" isDisabled>
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

export { SelectDisabled }
