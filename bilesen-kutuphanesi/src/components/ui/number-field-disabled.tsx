/**
 * NumberFieldDisabled
 * Devre dışı alan örnekleri (saf React).
 * @id 315
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldDisabled() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField isDisabled defaultValue={1024} minValue={0} name="width">
        <Label>Width</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Enter the width in pixels</Description>
      </NumberField>
      <NumberField
        isDisabled
        defaultValue={0.5}
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        name="percentage"
        step={0.1}
      >
        <Label>Percentage</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Value must be between 0 and 100</Description>
      </NumberField>
    </div>
  )
}

export { NumberFieldDisabled }
