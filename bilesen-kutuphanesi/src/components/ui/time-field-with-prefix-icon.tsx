/**
 * TimeFieldWithPrefixIcon
 * İkon prefix'li örnek (saf React).
 * @id 581
 * @category Date
 * @subcategory TimeField
 */
import { Clock } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldWithPrefixIcon() {
  return (
    <TimeField className="w-[256px]" name="time">
      <Label>Time</Label>
      <TimeFieldGroup>
        <Clock className="size-4 shrink-0 text-muted-foreground" />
        <TimeFieldInput>
          {(segment) => <TimeFieldSegment segment={segment} />}
        </TimeFieldInput>
        <TimeFieldSeparator />
      </TimeFieldGroup>
    </TimeField>
  )
}

export { TimeFieldWithPrefixIcon }
