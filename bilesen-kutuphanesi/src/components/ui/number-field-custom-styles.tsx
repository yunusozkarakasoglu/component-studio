/**
 * NumberFieldCustomStyles
 * Özelleştirilmiş örnek — gruplu düzen (saf React).
 * @id 326
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldCustomStyles() {
  return (
    <NumberField
      className="w-full max-w-48"
      defaultValue={2}
      minValue={1}
      name="guests"
      variant="secondary"
    >
      <Label className="font-medium text-foreground">Guests</Label>
      <NumberFieldGroup className="rounded-xl bg-muted/60">
        <NumberFieldDecrementButton className="text-muted-foreground hover:text-foreground" />
        <NumberFieldInput className="text-center tabular-nums" />
        <NumberFieldIncrementButton className="text-muted-foreground hover:text-foreground" />
      </NumberFieldGroup>
    </NumberField>
  )
}

export { NumberFieldCustomStyles }
