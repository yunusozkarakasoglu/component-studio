/**
 * TimeFieldBasic
 * Temel örnek (saf React).
 * @id 580
 * @category Tarih
 * @subcategory TimeField
 */
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldBasic() {
  return (
    <TimeField className="w-[256px]" name="time">
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

export { TimeFieldBasic }
