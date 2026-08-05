/**
 * TimeFieldWithDescription
 * Açıklamalı örnek (saf React).
 * @id 585
 * @category Date
 * @subcategory TimeField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { TimeField, TimeFieldGroup, TimeFieldInput, TimeFieldSegment, TimeFieldSeparator } from "@/components/ui/time-field"

function TimeFieldWithDescription() {
  return (
    <TimeField className="w-[256px]" name="time">
      <Label>Meeting time</Label>
      <TimeFieldGroup>
        <TimeFieldInput>
          {(segment) => <TimeFieldSegment segment={segment} />}
        </TimeFieldInput>
        <TimeFieldSeparator />
      </TimeFieldGroup>
      <Description>Your local timezone will be used</Description>
    </TimeField>
  )
}

export { TimeFieldWithDescription }
