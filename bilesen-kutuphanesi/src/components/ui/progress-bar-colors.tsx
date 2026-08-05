/**
 * ProgressBarColors
 * Renk örneği: accent/success/warning/danger (saf React).
 * @id 533
 * @category Yükleme & İlerleme
 * @subcategory ProgressBar
 */
import { Label } from "@/components/ui/label"
import { ProgressBar, ProgressBarFill, ProgressBarTrack, type ProgressColor } from "@/components/ui/progress-bar"

const COLORS: { color: ProgressColor; label: string }[] = [
  { color: "accent", label: "Accent" },
  { color: "success", label: "Success" },
  { color: "warning", label: "Warning" },
  { color: "danger", label: "Danger" },
]

function ProgressBarColors() {
  return (
    <div className="flex w-64 flex-col gap-4">
      {COLORS.map(({ color, label }) => (
        <div key={color} className="flex flex-col gap-1">
          <Label>{label}</Label>
          <ProgressBar aria-label={label} value={55} color={color}>
            <ProgressBarTrack>
              <ProgressBarFill />
            </ProgressBarTrack>
          </ProgressBar>
        </div>
      ))}
    </div>
  )
}

export { ProgressBarColors }
