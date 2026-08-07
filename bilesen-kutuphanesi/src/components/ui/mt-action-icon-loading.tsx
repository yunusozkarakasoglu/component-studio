/**
 * MtActionIconLoading
 * Yükleniyor durumu (saf React, Mantine kaynaklı).
 * @id 1085
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconLoading() {
  return (
    <div className="flex items-center gap-3">
      <MtActionIcon loading aria-label="Loading"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon loading variant="light" aria-label="Loading"><Settings className="size-4" /></MtActionIcon>
      <MtActionIcon loading variant="outline" aria-label="Loading"><Settings className="size-4" /></MtActionIcon>
    </div>
  )
}

export { MtActionIconLoading }
