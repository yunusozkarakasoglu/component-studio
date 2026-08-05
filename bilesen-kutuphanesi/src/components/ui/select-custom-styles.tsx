/**
 * SelectCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 578
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Light", "Dark", "System"]

function SelectCustomStyles() {
  return (
    <Select className="relative w-[256px]" placeholder="Theme" variant="secondary">
      <Label className="font-medium text-foreground">Theme</Label>
      <SelectTrigger className="rounded-xl bg-muted/50">
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox className="rounded-xl border-blue-500/20">
          {OPTIONS.map((o) => (
            <ListBoxItem key={o} id={o.toLowerCase()} textValue={o} className="hover:bg-blue-500/5">
              {o}
              <ListBoxItemIndicator className="border-blue-400" />
            </ListBoxItem>
          ))}
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { SelectCustomStyles }
