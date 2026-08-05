/**
 * RadioGroupValidation
 * Form doğrulama örneği (saf React).
 * @id 397
 * @category Seçim
 * @subcategory RadioGroup
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { FieldError } from "@/components/ui/field-error"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

function RadioGroupValidation() {
  const [message, setMessage] = useState<string | null>(null)

  return (
    <Form
      className="flex flex-col gap-4"
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const value = formData.get("plan-validation")
        setMessage(`Your chosen plan is: ${value}`)
      }}
    >
      <RadioGroup isRequired name="plan-validation">
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
        <FieldError>Choose a subscription before continuing.</FieldError>
      </RadioGroup>
      <Button className="mt-2 w-fit" type="submit">
        Submit
      </Button>
      {!!message && <p className="text-sm text-muted-foreground">{message}</p>}
    </Form>
  )
}

export { RadioGroupValidation }
