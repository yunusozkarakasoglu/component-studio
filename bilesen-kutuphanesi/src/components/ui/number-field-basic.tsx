/**
 * NumberFieldBasic
 * Temel örnek: artır/azalt butonlu sayı alanı (saf React).
 * @id 310
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldBasic() {
  return (
    <NumberField className="w-full max-w-64" defaultValue={1024} minValue={0} name="width">
      <Label>Width</Label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput className="w-[120px]" />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  )
}

export { NumberFieldBasic }
