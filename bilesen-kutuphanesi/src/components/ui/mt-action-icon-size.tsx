/**
 * MtActionIconSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1084
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconSize() {
  return (
    <div className="flex items-end gap-3">
      <MtActionIcon size="xs" aria-label="Settings"><Settings className="size-2.5" /></MtActionIcon>
      <MtActionIcon size="sm" aria-label="Settings"><Settings className="size-3" /></MtActionIcon>
      <MtActionIcon size="md" aria-label="Settings"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon size="lg" aria-label="Settings"><Settings className="size-5" /></MtActionIcon>
      <MtActionIcon size="xl" aria-label="Settings"><Settings className="size-6" /></MtActionIcon>
    </div>
  )
}

export { MtActionIconSize }
