/**
 * MtEmptyStateStylesApi
 * Stil API (saf React, Mantine kaynaklı).
 * @id 1472
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import { CloudOff } from "@/components/ui/icons"
import { MtEmptyState } from "@/components/ui/mt-empty-state"

function MtEmptyStateStylesApi() {
  return (
    <MtEmptyState
      icon={<CloudOff className="size-5" />}
      title="Offline"
      description="You're offline. Reconnect to sync your changes."
      variant="filled"
      className="max-w-md border-dashed"
    />
  )
}

export { MtEmptyStateStylesApi }
