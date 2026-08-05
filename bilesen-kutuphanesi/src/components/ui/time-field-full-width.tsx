/**
 * TimeFieldFullWidth
 * Tam genişlik örneği (saf React).
 * @id 588
 * @category Date
 * @subcategory TimeField
 */
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldFullWidth() {
  return (
    <div className="w-[400px]">
      <TimeField name="time">
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

export { TimeFieldFullWidth }
