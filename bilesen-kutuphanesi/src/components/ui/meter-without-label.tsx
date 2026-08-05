/**
 * MeterWithoutLabel
 * Etiketsiz örnek — yalnızca ölçer (saf React).
 * @id 558
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Meter, MeterFill, MeterTrack } from "@/components/ui/meter"

function MeterWithoutLabel() {
  return (
    <Meter aria-label="Bandwidth" className="w-64" value={75}>
      <MeterTrack>
        <MeterFill />
      </MeterTrack>
    </Meter>
  )
}

export { MeterWithoutLabel }
