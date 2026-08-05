/**
 * RadioGroupRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 399
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupRenderFunction() {
  return (
    <RadioGroup
      defaultValue="premium"
      name="plan-custom-render"
      render={(props) => <div {...props} data-custom="foo" />}
    >
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Basic Plan
        </RadioContent>
        <Description>Includes 100 messages per month</Description>
      </Radio>
      <Radio value="premium">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Premium Plan
        </RadioContent>
        <Description>Includes 200 messages per month</Description>
      </Radio>
      <Radio value="business">
        <RadioContent>
          <RadioControl>
            <RadioIndicator />
          </RadioControl>
          Business Plan
        </RadioContent>
        <Description>Unlimited messages</Description>
      </Radio>
    </RadioGroup>
  )
}

export { RadioGroupRenderFunction }
