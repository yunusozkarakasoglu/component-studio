/**
 * NumberFieldFormExample
 * Form entegrasyonu örneği: doğrulama + gönderim (saf React).
 * Form bileşeni gelmediği için native <form> kullanılır.
 * @id 321
 * @category Form Elemanları
 * @subcategory NumberField
 */
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Description } from "@/components/ui/description"
import { FieldError } from "@/components/ui/field-error"
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldDecrementButton, NumberFieldGroup, NumberFieldIncrementButton, NumberFieldInput } from "@/components/ui/number-field"
import { Spinner } from "@/components/ui/spinner"

function NumberFieldFormExample() {
  const [value, setValue] = useState<number | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const STOCK_AVAILABLE = 3
  const isOutOfStock = value !== undefined && value > STOCK_AVAILABLE

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (value === undefined || value === null || value < 1 || value > STOCK_AVAILABLE) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Order submitted:", { quantity: value })
      setValue(undefined)
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <form className="flex w-[280px] flex-col gap-4" onSubmit={handleSubmit}>
      <NumberField
        isRequired
        isInvalid={isOutOfStock}
        maxValue={5}
        minValue={1}
        name="quantity"
        value={value}
        onChange={setValue}
      >
        <Label>Order quantity</Label>
        <NumberFieldGroup>
          <NumberFieldDecrementButton />
          <NumberFieldInput className="w-[120px]" />
          <NumberFieldIncrementButton />
        </NumberFieldGroup>
        {isOutOfStock ? (
          <FieldError>Only {STOCK_AVAILABLE} items left in stock</FieldError>
        ) : (
          <Description>Only {STOCK_AVAILABLE} items available</Description>
        )}
      </NumberField>
      <Button
        className="w-full"
        isDisabled={value === undefined || value < 1 || value > STOCK_AVAILABLE}
        isPending={isSubmitting}
        type="submit"
        variant="primary"
      >
        {isSubmitting ? (
          <>
            <Spinner size="sm" />
            Processing...
          </>
        ) : (
          "Place Order"
        )}
      </Button>
    </form>
  )
}

export { NumberFieldFormExample }
