/**
 * MtEmptyStateIndicatorBackground
 * Gösterge arka planı (saf React, Mantine kaynaklı).
 * @id 1471
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import { CircleAlert } from "@/components/ui/icons"
import { MtEmptyState } from "@/components/ui/mt-empty-state"

function MtEmptyStateIndicatorBackground() {
  return (
    <MtEmptyState
      icon={<CircleAlert className="size-5" />}
      title="No notifications"
      description="You're all caught up. New notifications will appear here."
      variant="filled"
      className="max-w-md"
    />
  )
}

export { MtEmptyStateIndicatorBackground }
