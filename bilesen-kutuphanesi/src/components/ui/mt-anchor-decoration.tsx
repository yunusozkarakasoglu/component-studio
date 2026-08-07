/**
 * MtAnchorDecoration
 * Dekorasyon varyantı (saf React, Mantine kaynaklı).
 * @id 1102
 * @category Butonlar & Aksiyonlar
 * @subcategory MtAnchor
 * @source mantine
 */
import { MtAnchor } from "@/components/ui/mt-anchor"

function MtAnchorDecoration() {
  return (
    <div className="flex flex-col items-start gap-2">
      <MtAnchor href="#" className="text-lg">Large anchor link</MtAnchor>
      <MtAnchor href="#" className="text-xs text-muted-foreground hover:text-blue-600">
        Small muted anchor link
      </MtAnchor>
    </div>
  )
}

export { MtAnchorDecoration }
