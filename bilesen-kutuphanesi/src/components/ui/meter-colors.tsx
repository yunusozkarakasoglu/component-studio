/**
 * MeterColors
 * Renk örneği: accent/success/warning/danger (saf React).
 * @id 557
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Label } from "@/components/ui/label"
import { Meter, MeterFill, MeterTrack, type MeterColor } from "@/components/ui/meter"

const COLORS: { color: MeterColor; label: string }[] = [
  { color: "accent", label: "Accent" },
  { color: "success", label: "Success" },
  { color: "warning", label: "Warning" },
  { color: "danger", label: "Danger" },
]

function MeterColors() {
  return (
    <div className="flex w-64 flex-col gap-4">
      {COLORS.map(({ color, label }) => (
        <div key={color} className="flex flex-col gap-1">
          <Label>{label}</Label>
          <Meter aria-label={label} value={55} color={color}>
            <MeterTrack>
              <MeterFill />
            </MeterTrack>
          </Meter>
        </div>
      ))}
    </div>
  )
}

export { MeterColors }
