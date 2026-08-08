/**
 * MtEmptyStateUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1468
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import { Search } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtEmptyState, MtEmptyStateActions } from "@/components/ui/mt-empty-state"

function MtEmptyStateUsage() {
  return (
    <MtEmptyState
      icon={<Search className="size-5" />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters."
      className="max-w-md"
    >
      <MtEmptyStateActions>
        <MtButton variant="default">Reset filters</MtButton>
      </MtEmptyStateActions>
    </MtEmptyState>
  )
}

export { MtEmptyStateUsage }
