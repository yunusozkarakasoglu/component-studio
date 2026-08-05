/**
 * MeterSizes
 * Boyut örneği: sm/md/lg (saf React).
 * @id 556
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Label } from "@/components/ui/label"
import { Meter, MeterFill, MeterTrack } from "@/components/ui/meter"

function MeterSizes() {
  return (
    <div className="flex w-64 flex-col gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <Label className="capitalize">{size}</Label>
          <Meter aria-label={size} value={45} size={size}>
            <MeterTrack>
              <MeterFill />
            </MeterTrack>
          </Meter>
        </div>
      ))}
    </div>
  )
}

export { MeterSizes }
