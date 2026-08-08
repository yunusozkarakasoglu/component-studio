/**
 * MtSemiCircleLabel
 * Etiketler (saf React, Mantine kaynaklı).
 * @id 1540
 * @category Yükleme & İlerleme
 * @subcategory MtSemiCircleProgress
 * @source mantine
 */
import { MtSemiCircleProgress } from "@/components/ui/mt-semi-circle-progress"

function MtSemiCircleLabel() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <MtSemiCircleProgress value={35} label={<><b>%35</b><br /><span className="text-xs">kullanıldı</span></>} />
      <MtSemiCircleProgress value={80} label={<><b>%80</b><br /><span className="text-xs">doldu</span></>} />
    </div>
  )
}

export { MtSemiCircleLabel }
