/**
 * NumberFieldChevrons
 * Chevron ikonlu dikey düzen örneği (saf React).
 * @id 324
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { ChevronDown, ChevronUp } from "@/components/ui/icons"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldChevrons() {
  return (
    <NumberField
      className="w-full max-w-64"
      defaultValue={99}
      minValue={0}
      name="amount"
      formatOptions={{
        currency: "EUR",
        currencySign: "accounting",
        style: "currency",
      }}
    >
      <Label>Number field with chevrons</Label>
      <NumberFieldGroup className="flex">
        <NumberFieldInput className="flex-1" />
        <div className="flex h-full flex-col border-l border-border/50">
          <NumberFieldIncrementButton className="h-1/2 w-6 rounded-none border-0 pt-0.5 text-sm">
            <ChevronUp className="size-3" aria-hidden="true" />
          </NumberFieldIncrementButton>
          <NumberFieldDecrementButton className="h-1/2 w-6 rounded-none border-0 pb-0.5 text-sm">
            <ChevronDown className="size-3" aria-hidden="true" />
          </NumberFieldDecrementButton>
        </div>
      </NumberFieldGroup>
    </NumberField>
  )
}

export { NumberFieldChevrons }
