/**
 * ProgressBarCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 537
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarOutput, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarCustomStyles() {
  return (
    <ProgressBar aria-label="Upload" className="w-64" value={80} color="accent" size="lg">
      <div className="flex w-full items-center justify-between">
        <Label className="text-xs">Uploading video…</Label>
        <ProgressBarOutput className="text-xs font-medium text-blue-700" />
      </div>
      <ProgressBarTrack className="h-2.5 rounded-full bg-blue-100">
        <ProgressBarFill className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
      </ProgressBarTrack>
    </ProgressBar>
  )
}

export { ProgressBarCustomStyles }
