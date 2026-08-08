/**
 * MtSemiCircleFillDirection
 * Doldurma yönü (saf React, Mantine kaynaklı).
 * @id 1541
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleFillDirection() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="flex flex-col items-center gap-1">
        <MtSemiCircleProgress value={65} fillDirection="left-to-right" label="%65" />
        <p className="text-xs text-muted-foreground">Left → Right</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <MtSemiCircleProgress value={65} fillDirection="right-to-left" label="%65" />
        <p className="text-xs text-muted-foreground">Right → Left</p>
      </div>
    </div>
  )
}

export { MtSemiCircleFillDirection }
