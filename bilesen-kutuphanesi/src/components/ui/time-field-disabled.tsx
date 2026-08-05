/**
 * TimeFieldDisabled
 * Devre dışı örnek (saf React).
 * @id 587
 * @category Tarih
 * @subcategory TimeField
 */
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldDisabled() {
  return (
    <TimeField className="w-[256px]" name="time" isDisabled>
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

export { TimeFieldDisabled }
