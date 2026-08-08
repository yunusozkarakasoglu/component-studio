/**
 * MtEmptyStateCompound
 * Bileşik kullanım (saf React, Mantine kaynaklı).
 * @id 1470
 * @category Veri Gösterimi
 * @subcategory MtEmptyState
 * @source mantine
 */
import { FilePlus, FolderPlus } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtEmptyState, MtEmptyStateActions } from "@/components/ui/mt-empty-state"

function MtEmptyStateCompound() {
  return (
    <MtEmptyState
      icon={<FolderPlus className="size-5" />}
      title="No projects yet"
      description="Create your first project to get started."
      className="max-w-md"
    >
      <MtEmptyStateActions>
        <MtButton leftSection={<FilePlus className="size-4" />}>New project</MtButton>
        <MtButton variant="default">Import</MtButton>
      </MtEmptyStateActions>
    </MtEmptyState>
  )
}

export { MtEmptyStateCompound }
