/**
 * ShadcnButtonGroupSelect
 * Seçimli grup — görünüm seçici (saf React, shadcn kaynaklı).
 * Select: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 765
 * @category Butonlar & Aksiyonlar
 * @subcategory ShadcnButtonGroup
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import { ShadcnButtonGroup } from "@/components/ui/shadcn-button-group"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"

function ShadcnButtonGroupSelect() {
  return (
    <ShadcnButtonGroup>
      <ShadcnButton variant="outline">View</ShadcnButton>
      <Select className="relative" placeholder="Select view" defaultValue="grid">
        <SelectTrigger className="h-9 w-36">
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectPopover>
          <ListBox>
            <ListBoxItem id="grid" textValue="Grid">Grid</ListBoxItem>
            <ListBoxItem id="list" textValue="List">List</ListBoxItem>
            <ListBoxItem id="kanban" textValue="Kanban">Kanban</ListBoxItem>
          </ListBox>
        </SelectPopover>
      </Select>
    </ShadcnButtonGroup>
  )
}

export { ShadcnButtonGroupSelect }
