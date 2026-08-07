/**
 * MtCheckboxAnchor
 * Bağlantılı onay kutusu (saf React, Mantine kaynaklı).
 * @id 1226
 * @category Seçim
 * @subcategory MtCheckbox
 * @source mantine
 */
import { MtCheckbox } from "@/components/ui/mt-checkbox"

function MtCheckboxAnchor() {
  return (
    <MtCheckbox
      label={
        <>
          I agree to the{" "}
          <a href="#" className="text-blue-600 underline underline-offset-4">terms</a>
        </>
      }
    />
  )
}

export { MtCheckboxAnchor }
