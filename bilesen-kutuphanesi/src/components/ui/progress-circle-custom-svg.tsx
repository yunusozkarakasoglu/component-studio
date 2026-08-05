/**
 * ProgressCircleCustomSvg
 * Özel SVG prop'ları örneği — kalın halka (saf React).
 * @id 544
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle } from "@/components/ui/progress-circle"

function ProgressCircleCustomSvg() {
  return (
    <ProgressCircle aria-label="Storage" className="size-12" value={85} color="accent">
      <svg viewBox="0 0 36 36" className="size-full -rotate-90 text-blue-600" aria-hidden="true">
        <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="5" className="stroke-blue-100" />
        <circle
          cx="18"
          cy="18"
          r="15.9155"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          className="stroke-current"
          strokeDasharray="85 15"
        />
      </svg>
    </ProgressCircle>
  )
}

export { ProgressCircleCustomSvg }
