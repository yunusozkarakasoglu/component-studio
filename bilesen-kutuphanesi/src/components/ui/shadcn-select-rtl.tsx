/**
 * ShadcnSelectRtl
 * RTL örneği — Arapça seçim (saf React, shadcn kaynaklı).
 * @id 919
 * @category Combobox
 * @subcategory ShadcnSelect
 * @source shadcn
 */
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"

function ShadcnSelectRtl() {
  return (
    <div dir="rtl">
      <Select className="relative w-full max-w-48" placeholder="اختر فاكهة">
        <SelectTrigger>
          <SelectValue />
          <SelectIndicator />
        </SelectTrigger>
        <SelectPopover>
          <ListBox>
            <ListBoxItem id="apple" textValue="تفاحة">تفاحة</ListBoxItem>
            <ListBoxItem id="banana" textValue="موزة">موزة</ListBoxItem>
            <ListBoxItem id="blueberry" textValue="توت أزرق">توت أزرق</ListBoxItem>
          </ListBox>
        </SelectPopover>
      </Select>
    </div>
  )
}

export { ShadcnSelectRtl }
