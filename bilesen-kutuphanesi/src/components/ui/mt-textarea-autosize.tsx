/**
 * MtTextareaAutosize
 * Otomatik boyut (saf React, Mantine kaynaklı).
 * @id 1131
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaAutosize() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtTextarea placeholder="Autosize with no rows limit" label="Autosize with no rows limit" autosize minRows={4} />
      <MtTextarea label="Autosize with 4 rows max" placeholder="Autosize with 4 rows max" autosize minRows={2} maxRows={4} />
    </div>
  )
}

export { MtTextareaAutosize }
