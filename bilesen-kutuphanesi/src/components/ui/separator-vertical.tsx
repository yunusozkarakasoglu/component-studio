/**
 * SeparatorVertical
 * Dikey ayraç örneği (saf React).
 * @id 593
 * @category Genel
 * @subcategory Separator
 */
import { Separator } from "@/components/ui/separator"

function SeparatorVertical() {
  return (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Center</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  )
}

export { SeparatorVertical }
