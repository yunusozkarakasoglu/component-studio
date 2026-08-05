/**
 * NumberFieldRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 325
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldRenderFunction() {
  return (
    <NumberField
      className="w-full max-w-64"
      defaultValue={1024}
      minValue={0}
      name="width"
      render={(props) => <div {...props} data-custom="foo" />}
    >
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput className="w-[120px]" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  )
}

export { NumberFieldRenderFunction }
