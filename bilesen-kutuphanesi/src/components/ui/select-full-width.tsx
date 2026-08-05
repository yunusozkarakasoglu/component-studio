/**
 * SelectFullWidth
 * Tam genişlik örneği (saf React).
 * @id 571
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Free", "Pro", "Team", "Enterprise"]

function SelectFullWidth() {
  return (
    <div className="w-[400px]">
      <Select className="relative" placeholder="Select a plan">
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
    </div>
  )
}

export { SelectFullWidth }
