/**
 * MeterBasic
 * Temel örnek: depolama ölçer (saf React).
 * @id 555
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Label } from "@/components/ui/label"
import { Meter, MeterFill, MeterOutput, MeterTrack } from "@/components/ui/meter"

function MeterBasic() {
  return (
    <Meter aria-label="Storage" className="w-64" value={60}>
      <Label>Storage</Label>
      <MeterOutput />
      <MeterTrack>
        <MeterFill />
      </MeterTrack>
    </Meter>
  )
}

export { MeterBasic }
