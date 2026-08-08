/**
 * MtOverflowListCollapseFrom
 * Daraltma yönü (saf React, Mantine kaynaklı).
 * @id 1838
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { MtOverflowList } from "@/components/ui/mt-overflow-list"

function MtOverflowListCollapseFrom() {
  const items = ["İlk", "İkinci", "Üçüncü", "Dördüncü", "Beşinci"]

  return (
    <MtOverflowList
      items={items}
      maxVisibleItems={2}
      collapseFrom="start"
      renderItem={(item) => (
        <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground">{item}</div>
      )}
      className="w-52"
    />
  )
}

export { MtOverflowListCollapseFrom }
