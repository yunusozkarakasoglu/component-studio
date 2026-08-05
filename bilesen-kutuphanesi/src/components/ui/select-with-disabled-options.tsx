/**
 * SelectWithDisabledOptions
 * Devre dışı seçenekli örnek (saf React).
 * @id 575
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = [
  { label: "Free", disabled: false },
  { label: "Pro", disabled: false },
  { label: "Team (unavailable)", disabled: true },
  { label: "Enterprise", disabled: false },
]

function SelectWithDisabledOptions() {
  return (
    <Select className="relative w-[256px]" placeholder="Select a plan">
      <Label>Plan</Label>
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox>
          {OPTIONS.map((o) => (
            <ListBoxItem
              key={o.label}
              id={o.label.toLowerCase()}
              textValue={o.label}
              className={o.disabled ? "pointer-events-none cursor-not-allowed opacity-50" : undefined}
            >
              {o.label}
              <ListBoxItemIndicator />
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { SelectWithDisabledOptions }
