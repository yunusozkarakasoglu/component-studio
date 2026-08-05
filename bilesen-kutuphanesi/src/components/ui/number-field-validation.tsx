/**
 * NumberFieldValidation
 * isInvalid + FieldError örnekleri (saf React).
 * @id 317
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { FieldError } from "@/components/ui/field-error"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldValidation() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField isInvalid isRequired minValue={0} name="quantity" value={-5}>
        <Label>Quantity</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <FieldError>Quantity must be greater than or equal to 0</FieldError>
      </NumberField>
      <NumberField
        isInvalid
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        name="percentage"
        step={0.1}
        value={1.5}
      >
        <Label>Percentage</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <FieldError>Percentage must be between 0 and 100</FieldError>
      </NumberField>
    </div>
  )
}

export { NumberFieldValidation }
