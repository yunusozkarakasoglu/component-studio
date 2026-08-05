/**
 * RadioGroupUncontrolled
 * Kontrolsüz örnek — defaultValue + onChange (saf React).
 * @id 396
 * @category Seçim
 * @subcategory RadioGroup
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupUncontrolled() {
  const [selection, setSelection] = useState("pro")

  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="pro" name="plan-uncontrolled" onChange={(nextValue) => setSelection(nextValue)}>
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
        Last chosen plan: <span className="font-medium text-foreground">{selection}</span>
      </p>
    </div>
  )
}

export { RadioGroupUncontrolled }
