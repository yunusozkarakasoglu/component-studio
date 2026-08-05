/**
 * ProgressCircleColors
 * Renk örneği: accent/success/warning/danger (saf React).
 * @id 541
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleSvg, type ProgressCircleColor } from "@/components/ui/progress-circle"

const COLORS: ProgressCircleColor[] = ["accent", "success", "warning", "danger"]

function ProgressCircleColors() {
  return (
    <div className="flex items-center gap-6">
      {COLORS.map((color) => (
        <ProgressCircle key={color} aria-label={color} value={55} color={color}>
          <ProgressCircleSvg />
        </ProgressCircle>
      ))}
    </div>
  )
}

export { ProgressCircleColors }
