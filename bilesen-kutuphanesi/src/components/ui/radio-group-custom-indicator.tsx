/**
 * RadioGroupCustomIndicator
 * Özel gösterge örneği — Indicator children render fn (saf React).
 * @id 398
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupCustomIndicator() {
  return (
    <RadioGroup defaultValue="premium" name="plan-custom-indicator">
      <Label>Plan selection</Label>
      <Description>Choose the plan that suits you best</Description>
      <Radio value="basic">
        <RadioContent>
          <RadioControl>
            <RadioIndicator>
              {({ isSelected }) =>
                isSelected ? <span className="text-[10px] leading-none text-background">✓</span> : null
              }
            </RadioIndicator>
          </RadioControl>
          Basic Plan
        </RadioContent>
        <Description>Includes 100 messages per month</Description>
      </Radio>
      <Radio value="premium">
        <RadioContent>
          <RadioControl>
            <RadioIndicator>
              {({ isSelected }) =>
                isSelected ? <span className="text-[10px] leading-none text-background">✓</span> : null
              }
            </RadioIndicator>
          </RadioControl>
          Premium Plan
        </RadioContent>
        <Description>Includes 200 messages per month</Description>
      </Radio>
      <Radio value="business">
        <RadioContent>
          <RadioControl>
            <RadioIndicator>
              {({ isSelected }) =>
                isSelected ? <span className="text-[10px] leading-none text-background">✓</span> : null
              }
            </RadioIndicator>
          </RadioControl>
          Business Plan
        </RadioContent>
        <Description>Unlimited messages</Description>
      </Radio>
    </RadioGroup>
  )
}

export { RadioGroupCustomIndicator }
