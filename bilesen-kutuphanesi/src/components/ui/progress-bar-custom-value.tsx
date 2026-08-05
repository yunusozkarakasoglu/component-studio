/**
 * ProgressBarCustomValue
 * Özel değer aralığı örneği — min/max (saf React).
 * @id 536
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarOutput, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarCustomValue() {
  return (
    <ProgressBar aria-label="Memory usage" className="w-64" value={8} min={0} max={16}>
      <Label>Memory usage (GB)</Label>
      <ProgressBarOutput />
      <ProgressBarTrack>
        <ProgressBarFill />
      </ProgressBarTrack>
    </ProgressBar>
  )
}

export { ProgressBarCustomValue }
