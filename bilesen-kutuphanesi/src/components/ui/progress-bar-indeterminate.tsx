/**
 * ProgressBarIndeterminate
 * Belirsiz (indeterminate) örnek (saf React).
 * @id 535
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarIndeterminate() {
  return (
    <ProgressBar aria-label="Processing" className="w-64" value={0} isIndeterminate>
      <Label>Processing…</Label>
      <ProgressBarTrack>
        <ProgressBarFill />
      </ProgressBarTrack>
    </ProgressBar>
  )
}

export { ProgressBarIndeterminate }
