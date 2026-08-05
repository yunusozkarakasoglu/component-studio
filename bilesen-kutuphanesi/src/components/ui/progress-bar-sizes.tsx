/**
 * ProgressBarSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 532
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarTrack } from "@/components/ui/progress-bar"

function ProgressBarSizes() {
  return (
    <div className="flex w-64 flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <Label className="capitalize">{size}</Label>
          <ProgressBar aria-label={size} value={45} size={size}>
            <ProgressBarTrack>
              <ProgressBarFill />
            </ProgressBarTrack>
          </ProgressBar>
        </div>
      ))}
    </div>
  )
}

export { ProgressBarSizes }
