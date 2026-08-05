/**
 * NumberFieldCustomIcons
 * Özel ikon örnekleri — buton children override (saf React).
 * İkonlar kendi setimizden (Search ikonlu artır/azalt).
 * @id 323
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Description } from "@/components/ui/description"
import { Search } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldCustomIcons() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField defaultValue={1024} minValue={0} name="width">
        <Label>Width (Custom Icons)</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton>
            <Search className="size-4" aria-hidden="true" />
          </NumberFieldDecrementButton>
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton>
            <Search className="size-4" aria-hidden="true" />
          </NumberFieldIncrementButton>
        </NumberFieldGroup>
        <Description>Custom icon children</Description>
      </NumberField>
    </div>
  )
}

export { NumberFieldCustomIcons }
