/**
 * NumberFieldControlled
 * Kontrollü örnek — değer senkronizasyonu + butonlar (saf React).
 * @id 318
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"

function NumberFieldControlled() {
  const [value, setValue] = useState(1024)

  return (
    <div className="flex w-full max-w-64 flex-col gap-4">
      <NumberField minValue={0} name="width" value={value} onChange={(v) => setValue(v ?? 0)}>
        <Label>Width</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        <Description>Current value: {value}</Description>
      </NumberField>
      <div className="flex gap-2">
        <Button variant="tertiary" onPress={() => setValue(0)}>
          Reset to 0
        </Button>
        <Button variant="tertiary" onPress={() => setValue(2048)}>
          Set to 2048
        </Button>
      </div>
    </div>
  )
}

export { NumberFieldControlled }
