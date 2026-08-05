/**
 * NumberFieldVariants
 * primary/secondary variant örneği (saf React).
 * @id 311
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldVariants() {
  return (
    <div className="flex flex-col gap-4">
      <NumberField defaultValue={100} minValue={0} name="primary-width" variant="primary">
        <Label>Primary variant</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
      </NumberField>
      <NumberField defaultValue={100} minValue={0} name="secondary-width" variant="secondary">
        <Label>Secondary variant</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}

export { NumberFieldVariants }
