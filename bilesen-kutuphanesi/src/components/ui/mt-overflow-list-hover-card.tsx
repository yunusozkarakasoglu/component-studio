/**
 * MtOverflowListHoverCard
 * Üzerine gelince kart (saf React, Mantine kaynaklı).
 * @id 1839
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { MtOverflowList } from "@/components/ui/mt-overflow-list"

function MtOverflowListHoverCard() {
  const items = ["React", "TypeScript", "Tailwind"]

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

export { MtOverflowListHoverCard }
