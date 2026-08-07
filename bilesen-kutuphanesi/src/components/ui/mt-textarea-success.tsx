/**
 * MtTextareaSuccess
 * Başarı durumu (saf React, Mantine kaynaklı).
 * @id 1136
 * @category Form Elemanları
 * @subcategory MtTextarea
 * @source mantine
 */
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtTextareaSuccess() {
  return <MtTextarea label="Message" placeholder="Your message" success="Looks good!" className="max-w-sm" />
}

export { MtTextareaSuccess }
