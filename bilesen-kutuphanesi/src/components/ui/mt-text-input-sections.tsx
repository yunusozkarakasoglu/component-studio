/**
 * MtTextInputSections
 * Sol/sa bölümler — ikonlar (saf React, Mantine kaynaklı).
 * @id 1127
 * @category Form Elemanları
 * @subcategory MtTextInput
 * @source mantine
 */
import { AtSign } from "@/components/ui/icons"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtTextInputSections() {
  const icon = <AtSign className="size-4" />
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextInput leftSection={icon} label="Your email" placeholder="Your email" />
      <MtTextInput rightSection={icon} label="Your email" placeholder="Your email" />
    </div>
  )
}

export { MtTextInputSections }
