/**
 * TimeFieldWithPrefixAndSuffix
 * Prefix + suffix ikonlu örnek (saf React).
 * @id 583
 * @category Date
 * @subcategory TimeField
 */
import { Clock } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldWithPrefixAndSuffix() {
  return (
    <TimeField className="w-[256px]" name="time">
      <Label>Time</Label>
      <TimeFieldGroup>
        <Clock className="size-4 shrink-0 text-muted-foreground" />
        <TimeFieldInput>
          {(segment) => <TimeFieldSegment segment={segment} />}
        </TimeFieldInput>
        <TimeFieldSeparator />
        <span className="ms-auto text-xs text-muted-foreground">GMT+3</span>
      </TimeFieldGroup>
    </TimeField>
  )
}

export { TimeFieldWithPrefixAndSuffix }
