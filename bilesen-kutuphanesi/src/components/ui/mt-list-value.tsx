/**
 * MtListValue
 * Değerli liste (saf React, Mantine kaynaklı).
 * @id 1478
 * @category Veri Gösterimi
 * @subcategory MtList
 * @source mantine
 */
import { MtList, MtListItem } from "@/components/ui/mt-list"

function MtListValue() {
  return (
    <MtList className="max-w-sm">
      <MtListItem>React — 220k GitHub stars</MtListItem>
      <MtListItem>Vue — 207k GitHub stars</MtListItem>
      <MtListItem>Svelte — 78k GitHub stars</MtListItem>
      <MtListItem>Solid — 32k GitHub stars</MtListItem>
    </MtList>
  )
}

export { MtListValue }
