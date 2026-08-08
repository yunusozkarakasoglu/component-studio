/**
 * MtProgressSections
 * Bölümler (saf React, Mantine kaynaklı).
 * @id 1527
 * @category Yükleme & İlerleme
 * @subcategory MtProgress
 * @source mantine
 */
import { MtProgress } from "@/components/ui/mt-progress"

function MtProgressSections() {
  return (
    <MtProgress
      className="max-w-md"
      sections={[
        { value: 40, color: "cyan" },
        { value: 25, color: "blue" },
        { value: 15, color: "grape" },
      ]}
    />
  )
}

export { MtProgressSections }
