/**
 * MtActionIconDisabled
 * Devre dışı durum (saf React, Mantine kaynaklı).
 * @id 1086
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconDisabled() {
  return (
    <div className="flex items-center gap-3">
      <MtActionIcon disabled aria-label="Settings"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon disabled variant="light" aria-label="Settings"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon disabled variant="outline" aria-label="Settings"><Settings className="size-4" /></MtActionIcon>
    </div>
  )
}

export { MtActionIconDisabled }
