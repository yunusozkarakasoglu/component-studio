/**
 * ProgressBarWithoutLabel
 * Etiketsiz örnek — yalnızca çubuk (saf React).
 * @id 534
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { ProgressBar, ProgressBarFill, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarWithoutLabel() {
  return (
    <ProgressBar aria-label="Uploading" className="w-64" value={75}>
      <ProgressBarTrack>
        <ProgressBarFill />
      </ProgressBarTrack>
    </ProgressBar>
  )
}

export { ProgressBarWithoutLabel }
