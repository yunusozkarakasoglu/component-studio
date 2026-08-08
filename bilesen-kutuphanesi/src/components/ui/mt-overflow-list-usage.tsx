/**
 * MtOverflowListUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1842
 * @category Özel Komponentler
 * @subcategory MtOverflowList
 * @source mantine
 */
import { MtOverflowList } from "@/components/ui/mt-overflow-list"

function MtOverflowListUsage() {
  const items = ["React", "TypeScript", "Tailwind", "Mantine", "Vite", "Node"]

  return (
    <MtOverflowList
      items={items}
      maxVisibleItems={3}
      renderItem={(item) => (
        <div className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground">{item}</div>
      )}
      className="w-56"
    />
  )
}

export { MtOverflowListUsage }
