/**
 * NumberFieldFormatOptions
 * Biçimlendirme örneği: para/yüzde/ondalık/birim (Intl — saf React).
 * @id 320
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldFormatOptions() {
  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField
        defaultValue={99}
        minValue={0}
        name="currency-eur"
        formatOptions={{
          currency: "EUR",
          currencySign: "accounting",
          style: "currency",
        }}
      >
        <Label>Currency (EUR - Accounting)</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Accounting format with EUR currency</Description>
      </NumberField>
      <NumberField
        defaultValue={99.99}
        minValue={0}
        name="currency-usd"
        formatOptions={{
          currency: "USD",
          style: "currency",
        }}
      >
        <Label>Currency (USD)</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Standard USD currency format</Description>
      </NumberField>
      <NumberField
        defaultValue={0.5}
        formatOptions={{ style: "percent" }}
        maxValue={1}
        minValue={0}
        name="percentage"
        step={0.01}
      >
        <Label>Percentage</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Percentage format (0-1, where 0.5 = 50%)</Description>
      </NumberField>
      <NumberField
        defaultValue={1234.56}
        minValue={0}
        name="decimal"
        formatOptions={{
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
          style: "decimal",
        }}
      >
        <Label>Decimal (2 decimal places)</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Decimal format with 2 decimal places</Description>
      </NumberField>
      <NumberField
        defaultValue={1000}
        minValue={0}
        name="unit"
        formatOptions={{
          style: "unit",
          unit: "kilogram",
          unitDisplay: "short",
        }}
      >
        <Label>Unit (Kilograms)</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Unit format with kilograms</Description>
      </NumberField>
    </div>
  )
}

export { NumberFieldFormatOptions }
