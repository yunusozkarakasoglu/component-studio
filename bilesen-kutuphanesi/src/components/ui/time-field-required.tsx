/**
 * TimeFieldRequired
 * Zorunlu alan örneği (saf React).
 * @id 586
 * @category Date
 * @subcategory TimeField
 */
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldRequired() {
  return (
    <TimeField className="w-[256px]" name="time" isRequired>
      <Label>Time</Label>
      <TimeFieldGroup>
        <TimeFieldInput>
          {(segment) => <TimeFieldSegment segment={segment} />}
        </TimeFieldInput>
        <TimeFieldSeparator />
      </TimeFieldGroup>
    </TimeField>
  )
}

export { TimeFieldRequired }
