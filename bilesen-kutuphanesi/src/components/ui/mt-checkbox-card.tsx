/**
 * MtCheckboxCard
 * Kart görünümlü onay kutusu (saf React, Mantine kaynaklı).
 * @id 1223
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors has-checked:border-blue-600 has-checked:bg-blue-50">
        <MtCheckbox label="" />
        <div>
          <p className="font-medium">Basic plan</p>
          <p className="text-sm text-muted-foreground">For individuals and small teams</p>
        </div>
      </label>
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors has-checked:border-blue-600 has-checked:bg-blue-50">
        <MtCheckbox label="" />
        <div>
          <p className="font-medium">Pro plan</p>
          <p className="text-sm text-muted-foreground">For growing businesses</p>
        </div>
      </label>
    </div>
  )
}

export { MtCheckboxCard }
