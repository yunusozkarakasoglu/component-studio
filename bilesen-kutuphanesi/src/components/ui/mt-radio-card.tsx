/**
 * MtRadioCard
 * Kart görünümlü radyo (saf React, Mantine kaynaklı).
 * @id 1232
 * @category Seçim
 * @subcategory MtRadio
 * @source mantine
 */
import { MtRadio, MtRadioGroup } from "@/components/ui/mt-radio"

function MtRadioCard() {
  return (
    <MtRadioGroup defaultValue="pro" className="max-w-sm">
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors has-checked:border-blue-600 has-checked:bg-blue-50">
        <MtRadio value="basic" />
        <div>
          <p className="font-medium">Basic</p>
          <p className="text-sm text-muted-foreground">For individuals</p>
        </div>
      </label>
      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors has-checked:border-blue-600 has-checked:bg-blue-50">
        <MtRadio value="pro" />
        <div>
          <p className="font-medium">Pro</p>
          <p className="text-sm text-muted-foreground">For growing businesses</p>
        </div>
      </label>
    </MtRadioGroup>
  )
}

export { MtRadioCard }
