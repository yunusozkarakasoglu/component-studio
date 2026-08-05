/**
 * MeterCustomStyles
 * Özelleştirilmiş örnek (saf React).
 * @id 560
 * @category Yükleme & İlerleme
 * @subcategory Meter
 */
import { Label } from "@/components/ui/label"
import { Meter, MeterFill, MeterOutput, MeterTrack } from "@/components/ui/meter"

function MeterCustomStyles() {
  return (
    <Meter aria-label="Disk" className="w-64" value={85} color="danger" size="lg">
      <div className="flex w-full items-center justify-between">
        <Label className="text-xs">Disk usage</Label>
        <MeterOutput className="text-xs font-medium text-red-600" />
      </div>
      <MeterTrack className="h-2.5 rounded-full bg-red-100">
        <MeterFill className="rounded-full bg-gradient-to-r from-amber-500 to-red-600" />
      </MeterTrack>
    </Meter>
  )
}

export { MeterCustomStyles }
