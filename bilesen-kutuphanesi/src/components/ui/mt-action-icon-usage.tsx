/**
 * MtActionIconUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1083
 * @category Butonlar & Aksiyonlar
 * @subcategory MtActionIcon
 * @source mantine
 */
import { Settings } from "@/components/ui/icons"
import { MtActionIcon } from "@/components/ui/mt-action-icon"

function MtActionIconUsage() {
  return (
    <div className="flex items-center gap-3">
      <MtActionIcon aria-label="Settings" variant="filled">
        <Settings className="size-4" />
      </MtActionIcon>
      <MtActionIcon aria-label="Settings" variant="light">
        <Settings className="size-4" />
      </MtActionIcon>
      <MtActionIcon aria-label="Settings" variant="outline">
        <Settings className="size-4" />
      </MtActionIcon>
      <MtActionIcon aria-label="Settings" variant="default">
        <Settings className="size-4" />
      </MtActionIcon>
    </div>
  )
}

export { MtActionIconUsage }
