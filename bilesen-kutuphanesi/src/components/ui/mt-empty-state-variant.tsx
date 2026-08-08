/**
 * MtEmptyStateVariant
 * Varyantlar (saf React, Mantine kaynaklı).
 * @id 1469
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import { Inbox } from "@/components/ui/icons"
import { MtEmptyState } from "@/components/ui/mt-empty-state"

function MtEmptyStateVariant() {
  return (
    <div className="flex flex-col gap-4">
      <MtEmptyState icon={<Inbox className="size-5" />} title="Filled" description="Variant: filled (default)" variant="filled" className="max-w-md" />
      <MtEmptyState icon={<Inbox className="size-5" />} title="Outline" description="Variant: outline" variant="outline" className="max-w-md" />
      <MtEmptyState icon={<Inbox className="size-5" />} title="Transparent" description="Variant: transparent" variant="transparent" className="max-w-md" />
    </div>
  )
}

export { MtEmptyStateVariant }
