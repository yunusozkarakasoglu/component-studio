/**
 * SelectControlled
 * Kontrollü örnek — seçim gösterimi (saf React).
 * @id 577
 * @category Combobox
 * @subcategory Select
 */
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { ListBox, ListBoxItem, ListBoxItemIndicator } from "@/components/ui/list-box"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"

const OPTIONS = ["Overview", "Analytics", "Reports"]

function SelectControlled() {
  const [value, setValue] = useState<string | null>("analytics")

  return (
    <div className="flex flex-col gap-3">
      <Select className="relative w-[256px]" placeholder="Choose a view" value={value} onChange={(v) => setValue(Array.isArray(v) ? v[0] : v)}>
        <Label>View</Label>
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
      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-medium text-foreground">{value ?? "(none)"}</span>
      </p>
    </div>
  )
}

export { SelectControlled }
