/**
 * SelectWithDescription
 * Açıklamalı örnek (saf React).
 * @id 572
 * @category Combobox
 * @subcategory Select
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["English", "Türkçe", "Deutsch", "Français"]

function SelectWithDescription() {
  return (
    <Select className="relative w-[256px]" placeholder="Select language">
      <Label>Language</Label>
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
      <Description>Used for emails and notifications</Description>
    </Select>
  )
}

export { SelectWithDescription }
