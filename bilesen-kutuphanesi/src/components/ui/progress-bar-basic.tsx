/**
 * ProgressBarBasic
 * Temel örnek (saf React).
 * @id 531
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarOutput, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarBasic() {
  return (
    <ProgressBar aria-label="Loading" className="w-64" value={60}>
      <Label>Loading</Label>
      <ProgressBarOutput />
      <ProgressBarTrack>
        <ProgressBarFill />
      </ProgressBarTrack>
    </ProgressBar>
  )
}

export { ProgressBarBasic }
