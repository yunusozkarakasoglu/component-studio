/**
 * NumberFieldOnSurface
 * Yüzey (Surface) üzerinde secondary variant örneği (saf React).
 * Yüzey div ile simüle edilir; percent format içerir.
 * @id 312
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldOnSurface() {
  return (
    <div className="flex w-full max-w-[280px] flex-col gap-4 rounded-3xl bg-muted/40 p-6">
      <NumberField defaultValue={1024} minValue={0} name="width" variant="secondary">
        <Label>Width</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-full" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Enter the width in pixels</Description>
      </NumberField>
      <NumberField
        defaultValue={0.5}
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        name="percentage"
        step={0.1}
        variant="secondary"
      >
        <Label>Percentage</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-full" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Value must be between 0 and 100</Description>
      </NumberField>
    </div>
  )
}

export { NumberFieldOnSurface }
