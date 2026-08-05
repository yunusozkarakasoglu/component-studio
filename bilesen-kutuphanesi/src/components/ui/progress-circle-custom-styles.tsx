/**
 * ProgressCircleCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 545
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleLabel, ProgressCircleSvg } from "@/components/ui/progress-circle"

function ProgressCircleCustomStyles() {
  return (
    <div className="flex items-center gap-4">
      <ProgressCircle aria-label="Battery" className="size-14" value={65} color="success">
        <ProgressCircleSvg className="text-emerald-600" />
        <ProgressCircleLabel className="text-[11px] font-bold text-emerald-700" />
      </ProgressCircle>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-foreground">Battery health</p>
        <p className="text-xs text-muted-foreground">65% — good condition</p>
      </div>
    </div>
  )
}

export { ProgressCircleCustomStyles }
