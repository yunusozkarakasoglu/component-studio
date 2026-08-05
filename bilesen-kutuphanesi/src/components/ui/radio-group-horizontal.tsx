/**
 * RadioGroupHorizontal
 * Yatay yönlendirme örneği (saf React).
 * @id 391
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupHorizontal() {
  return (
    <div className="flex flex-col gap-4">
      <Label>Subscription plan</Label>
      <RadioGroup defaultValue="pro" name="plan-orientation" orientation="horizontal">
        <Radio value="starter">
          <RadioContent>
            <RadioControl>
              <RadioIndicator />
            </RadioControl>
            Starter
          </RadioContent>
          <Description>For side projects</Description>
        </Radio>
        <Radio value="pro">
          <RadioContent>
            <RadioControl>
              <RadioIndicator />
            </RadioControl>
            Pro
          </RadioContent>
          <Description>Advanced reporting</Description>
        </Radio>
        <Radio value="teams">
          <RadioContent>
            <RadioControl>
              <RadioIndicator />
            </RadioControl>
            Teams
          </RadioContent>
          <Description>Up to 10 teammates</Description>
        </Radio>
      </RadioGroup>
    </div>
  )
}

export { RadioGroupHorizontal }
