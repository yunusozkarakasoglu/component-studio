/**
 * MtButtonAutoContrast
 * Otomatik kontrast — açık renkli buton üzerinde koyu metin (saf React, Mantine kaynaklı).
 * @id 1072
 * @category Butonlar & Aksiyonlar
 * @subcategory MtButton
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"

function MtButtonAutoContrast() {
  return (
    <div className="flex flex-wrap gap-3">
      <MtButton className="bg-yellow-400 text-black hover:bg-yellow-500">Yellow with auto contrast</MtButton>
      <MtButton className="bg-emerald-400 text-black hover:bg-emerald-500">Emerald with auto contrast</MtButton>
    </div>
  )
}

export { MtButtonAutoContrast }
