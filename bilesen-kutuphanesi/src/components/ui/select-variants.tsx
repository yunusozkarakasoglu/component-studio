/**
 * SelectVariants
 * primary/secondary variant örneği (saf React).
 * @id 570
 * @category Combobox
 * @subcategory Select
 */
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Option 1", "Option 2", "Option 3"]

function SelectVariants() {
  return (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary"] as const).map((variant) => (
        <Select key={variant} className="relative w-[256px]" placeholder="Select one" variant={variant}>
          <Label className="capitalize">{variant} variant</Label>
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
      ))}
    </div>
  )
}

export { SelectVariants }
