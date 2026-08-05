/**
 * NumberFieldFullWidth
 * Tam genişlik örneği (saf React).
 * @id 316
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldFullWidth() {
  return (
    <div className="w-[400px] space-y-4">
      <NumberField fullWidth defaultValue={1024} minValue={0} name="width">
        <Label>Width</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}

export { NumberFieldFullWidth }
