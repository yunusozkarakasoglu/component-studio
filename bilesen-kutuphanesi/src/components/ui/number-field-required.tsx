/**
 * NumberFieldRequired
 * Zorunlu alan örnekleri (saf React).
 * @id 314
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldRequired() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField isRequired minValue={0} name="quantity">
        <Label>Quantity</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
      </NumberField>
      <NumberField isRequired defaultValue={1} maxValue={10} minValue={1} name="rating">
        <Label>Rating</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Rate from 1 to 10</Description>
      </NumberField>
    </div>
  )
}

export { NumberFieldRequired }
