/**
 * ProgressCircleIndeterminate
 * Belirsiz (dönen) örnek (saf React).
 * @id 542
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleSvg } from "@/components/ui/progress-circle"

function ProgressCircleIndeterminate() {
  return (
    <ProgressCircle aria-label="Processing" value={0} isIndeterminate>
      <ProgressCircleSvg />
    </ProgressCircle>
  )
}

export { ProgressCircleIndeterminate }
