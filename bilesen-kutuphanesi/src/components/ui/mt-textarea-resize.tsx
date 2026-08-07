/**
 * MtTextareaResize
 * Yeniden boyutlandırma (saf React, Mantine kaynaklı).
 * @id 1135
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaResize() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextarea label="Resize vertical" placeholder="Drag the corner" resize="vertical" />
      <MtTextarea label="No resize" placeholder="Fixed size" resize="none" />
    </div>
  )
}

export { MtTextareaResize }
