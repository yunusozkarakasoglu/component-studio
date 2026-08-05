/**
 * NumberFieldWithValidation
 * Özel doğrulama örneği (kontrollü — saf React).
 * @id 322
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { useState } from "react"
import { Description } from "@/components/ui/description"
import { FieldError } from "@/components/ui/field-error"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldWithValidation() {
  const [value, setValue] = useState<number | undefined>(undefined)
  const isInvalid = value !== undefined && (value < 0 || value > 100)

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField
        isRequired
        formatOptions={{ style: "percent" }}
        isInvalid={isInvalid}
        maxValue={1}
        minValue={0}
        name="percentage"
        step={0.1}
        value={value}
        onChange={setValue}
      >
        <Label>Percentage</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        {isInvalid ? (
          <FieldError>Percentage must be between 0 and 100</FieldError>
        ) : (
          <Description>Enter a value between 0 and 100</Description>
        )}
      </NumberField>
    </div>
  )
}

export { NumberFieldWithValidation }
