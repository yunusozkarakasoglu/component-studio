/**
 * TimeFieldOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * @id 584
 * @category Date
 * @subcategory TimeField
 */
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldOnSurface() {
  return (
    <div className="w-fit rounded-3xl bg-muted/40 p-6">
      <TimeField className="w-[256px]" name="time" variant="secondary">
        <Label>Time</Label>
        <TimeFieldGroup>
          <TimeFieldInput>
            {(segment) => <TimeFieldSegment segment={segment} />}
          </TimeFieldInput>
          <TimeFieldSeparator />
        </TimeFieldGroup>
      </TimeField>
    </div>
  )
}

export { TimeFieldOnSurface }
