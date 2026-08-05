/**
 * ProgressCircleSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 540
 * @category Yükleme & İlerleme
 * @subcategory ProgressCircle
 */
import { ProgressCircle, ProgressCircleSvg } from "@/components/ui/progress-circle"

function ProgressCircleSizes() {
  return (
    <div className="flex items-center gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <ProgressCircle key={size} aria-label={size} value={45} size={size}>
          <ProgressCircleSvg />
        </ProgressCircle>
      ))}
    </div>
  )
}

export { ProgressCircleSizes }
