/**
 * RadioGroupDisabled
 * Devre dışı grup örneği (saf React).
 * @id 394
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupDisabled() {
  return (
    <RadioGroup isDisabled defaultValue="pro" name="plan-disabled">
      <Label>Subscription plan</Label>
      <Description>Plan changes are temporarily paused while we roll out updates.</Description>
      <Radio value="starter">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Starter
        </RadioContent>
        <Description>For side projects and small teams</Description>
      </Radio>
      <Radio value="pro">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Pro
        </RadioContent>
        <Description>Advanced reporting and analytics</Description>
      </Radio>
      <Radio value="teams">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Teams
        </RadioContent>
        <Description>Share access with up to 10 teammates</Description>
      </Radio>
    </RadioGroup>
  )
}

export { RadioGroupDisabled }
