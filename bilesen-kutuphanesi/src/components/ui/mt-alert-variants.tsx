/**
 * MtAlertVariants
 * Varyantlar (saf React, Mantine kaynaklı).
 * @id 1564
 * @category Alert & Dialog
 * @subcategory MtAlert
 * @source mantine
 */
import { Info } from "@/components/ui/icons"
import { MtAlert } from "@/components/ui/mt-alert"

function MtAlertVariants() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <MtAlert title="Light variant" color="blue" icon={<Info className="size-5" />} variant="light">
        Default light background.
      </MtAlert>
      <MtAlert title="Filled variant" color="blue" icon={<Info className="size-5" />} variant="filled">
        Strong filled background.
      </MtAlert>
      <MtAlert title="Outline variant" color="blue" icon={<Info className="size-5" />} variant="outline">
        Outline only.
      </MtAlert>
      <MtAlert title="Transparent variant" color="blue" icon={<Info className="size-5" />} variant="transparent">
        No background at all.
      </MtAlert>
    </div>
  )
}

export { MtAlertVariants }
