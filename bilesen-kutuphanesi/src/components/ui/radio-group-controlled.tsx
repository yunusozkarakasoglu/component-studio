/**
 * RadioGroupControlled
 * Kontrollü örnek — seçili değer gösterimi (saf React).
 * @id 395
 * @category Seçim
 * @subcategory RadioGroup
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupControlled() {
  const [value, setValue] = useState("pro")

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup name="plan-controlled" value={value} onChange={setValue}>
        <Label>Subscription plan</Label>
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
      <p className="text-sm text-muted-foreground">
        Selected plan: <span className="font-medium text-foreground">{value}</span>
      </p>
    </div>
  )
}

export { RadioGroupControlled }
