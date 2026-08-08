/**
 * MtOverflowListMaxVisibleItems
 * Görünür öğe sayısı (saf React, Mantine kaynaklı).
 * @id 1841
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { MtOverflowList } from "@/components/ui/mt-overflow-list"

function MtOverflowListMaxVisibleItems() {
  const items = ["A", "B", "C", "D", "E", "F"]

  return (
    <MtOverflowList
      items={items}
      maxVisibleItems={4}
      renderItem={(item) => (
        <div className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-sm text-foreground">{item}</div>
      )}
      className="w-48"
    />
  )
}

export { MtOverflowListMaxVisibleItems }
