/**
 * MtActionIconCustomSize
 * Özel boyut (saf React, Mantine kaynaklı).
 * @id 1089
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconCustomSize() {
  return (
    <div className="flex items-center gap-3">
      <MtActionIcon className="size-6" aria-label="Settings"><Settings className="size-3" /></MtActionIcon>
      <MtActionIcon className="size-8" aria-label="Settings"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon className="size-12" aria-label="Settings"><Settings className="size-6" /></MtActionIcon>
    </div>
  )
}

export { MtActionIconCustomSize }
