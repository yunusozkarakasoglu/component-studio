/**
 * ProgressCircleBasic
 * Temel örnek (saf React).
 * @id 539
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleSvg } from "@/components/ui/progress-circle"

function ProgressCircleBasic() {
  return (
    <ProgressCircle aria-label="Loading" value={60}>
      <ProgressCircleSvg />
    </ProgressCircle>
  )
}

export { ProgressCircleBasic }
