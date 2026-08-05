/**
 * MeterCustomValue
 * Özel değer aralığı örneği — min/max (saf React).
 * @id 559
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Label } from "@/components/ui/label"
import { Meter, MeterFill, MeterOutput, MeterTrack } from "@/components/ui/meter"

function MeterCustomValue() {
  return (
    <Meter aria-label="CPU" className="w-64" value={3.2} min={0} max={4}>
      <Label>CPU cores in use</Label>
      <MeterOutput />
      <MeterTrack>
        <MeterFill />
      </MeterTrack>
    </Meter>
  )
}

export { MeterCustomValue }
