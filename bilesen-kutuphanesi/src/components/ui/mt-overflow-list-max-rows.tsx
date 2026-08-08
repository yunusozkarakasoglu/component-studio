/**
 * MtOverflowListMaxRows
 * Maksimum satır (saf React, Mantine kaynaklı).
 * @id 1840
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { MtOverflowList } from "@/components/ui/mt-overflow-list"

function MtOverflowListMaxRows() {
  const items = ["Satır 1", "Satır 2", "Satır 3", "Satır 4"]

  return (
    <MtOverflowList
      items={items}
      maxVisibleItems={2}
      renderItem={(item) => (
        <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground">{item}</div>
      )}
      className="w-52"
    />
  )
}

export { MtOverflowListMaxRows }
