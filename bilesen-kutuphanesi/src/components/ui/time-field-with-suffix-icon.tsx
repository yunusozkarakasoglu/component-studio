/**
 * TimeFieldWithSuffixIcon
 * İkon suffix'li örnek (saf React).
 * @id 582
 * @category Date
 * @subcategory TimeField
 */
import { Clock } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldWithSuffixIcon() {
  return (
    <TimeField className="w-[256px]" name="time">
      <Label>Time</Label>
      <TimeFieldGroup>
        <TimeFieldInput>
          {(segment) => <TimeFieldSegment segment={segment} />}
        </TimeFieldInput>
        <TimeFieldSeparator />
        <Clock className="ms-auto size-4 shrink-0 text-muted-foreground" />
      </TimeFieldGroup>
    </TimeField>
  )
}

export { TimeFieldWithSuffixIcon }
