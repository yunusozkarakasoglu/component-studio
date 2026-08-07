/**
 * MtDividerOrientation
 * Dikey ayraç boyutları (saf React, Mantine kaynaklı).
 * @id 1031
 * @category Genel
 * @subcategory MtDivider
 * @source mantine
 */
import { MtDivider } from "@/components/ui/mt-divider"

function MtDividerOrientation() {
  return (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Label</span>
      <MtDivider orientation="vertical" size={1} />
      <span className="text-sm">Label</span>
      <MtDivider orientation="vertical" size={2} />
      <span className="text-sm">Label</span>
      <MtDivider orientation="vertical" size={3} />
      <span className="text-sm">Label</span>
    </div>
  )
}

export { MtDividerOrientation }
