/**
 * ShadcnSelectGroups
 * Gruplu seçim — bölüm başlıkları (saf React, shadcn kaynaklı).
 * @id 914
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem, ListBoxSection } from "@/components/ui/list-box"

function ShadcnSelectGroups() {
  return (
    <Select className="relative w-full max-w-48" placeholder="Select a fruit">
      <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
      </SelectTrigger>
      <SelectPopover>
        <ListBox>
          <ListBoxSection title="Citrus">
            <ListBoxItem id="lemon" textValue="Lemon">Lemon</ListBoxItem>
            <ListBoxItem id="lime" textValue="Lime">Lime</ListBoxItem>
          </ListBoxSection>
          <ListBoxSection title="Berries">
            <ListBoxItem id="blueberry" textValue="Blueberry">Blueberry</ListBoxItem>
            <ListBoxItem id="strawberry" textValue="Strawberry">Strawberry</ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </SelectPopover>
    </Select>
  )
}

export { ShadcnSelectGroups }
