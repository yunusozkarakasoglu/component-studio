/**
 * ProgressCircleWithLabel
 * İçinde yüzde etiketli örnek (saf React).
 * @id 543
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleLabel, ProgressCircleSvg } from "@/components/ui/progress-circle"

function ProgressCircleWithLabel() {
  return (
    <ProgressCircle aria-label="Download" value={70} size="lg">
      <ProgressCircleSvg />
      <ProgressCircleLabel />
    </ProgressCircle>
  )
}

export { ProgressCircleWithLabel }
