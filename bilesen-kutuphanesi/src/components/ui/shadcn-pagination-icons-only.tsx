/**
 * ShadcnPaginationIconsOnly
 * Sadece ileri/geri — satır sayısı seçici ile (saf React, shadcn kaynaklı).
 * Select: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 844
 * @category Navigasyon
 * @subcategory ShadcnPagination
 * @source shadcn
 */
import { ShadcnField, ShadcnFieldLabel } from "@/components/ui/shadcn-field"
import {
  ShadcnPagination,
  ShadcnPaginationContent,
  ShadcnPaginationItem,
  ShadcnPaginationNext,
  ShadcnPaginationPrevious,
} from "@/components/ui/shadcn-pagination"
import { Select, SelectIndicator, SelectPopover, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ListBox, ListBoxItem } from "@/components/ui/list-box"

function ShadcnPaginationIconsOnly() {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <ShadcnField orientation="horizontal" className="w-fit">
        <ShadcnFieldLabel>Rows per page</ShadcnFieldLabel>
        <Select className="relative" placeholder="25" defaultValue="25">
          <SelectTrigger className="h-9 w-20">
            <SelectValue />
            <SelectIndicator />
          </SelectTrigger>
          <SelectPopover>
            <ListBox>
              <ListBoxItem id="10" textValue="10">10</ListBoxItem>
              <ListBoxItem id="25" textValue="25">25</ListBoxItem>
              <ListBoxItem id="50" textValue="50">50</ListBoxItem>
              <ListBoxItem id="100" textValue="100">100</ListBoxItem>
            </ListBox>
          </SelectPopover>
        </Select>
      </ShadcnField>
      <ShadcnPagination className="mx-0 w-auto">
        <ShadcnPaginationContent>
          <ShadcnPaginationItem>
            <ShadcnPaginationPrevious href="#" />
          </ShadcnPaginationItem>
          <ShadcnPaginationItem>
            <ShadcnPaginationNext href="#" />
          </ShadcnPaginationItem>
        </ShadcnPaginationContent>
      </ShadcnPagination>
    </div>
  )
}

export { ShadcnPaginationIconsOnly }
