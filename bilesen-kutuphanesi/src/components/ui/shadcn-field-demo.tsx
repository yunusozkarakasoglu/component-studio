/**
 * ShadcnFieldDemo
 * Ödeme formu — Field compound'un tam kullanımı (saf React, shadcn kaynaklı).
 * Select/Checkbox/Textarea/Button: kütüphanenin mevcut bileşenleri (Heroui — saf React).
 * @id 650
 * @category Form Elemanları
 * @subcategory ShadcnField
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ShadcnField,
  ShadcnFieldDescription,
  ShadcnFieldGroup,
  ShadcnFieldLabel,
  ShadcnFieldLegend,
  ShadcnFieldSeparator,
  ShadcnFieldSet,
} from "@/components/ui/shadcn-field"
import { ShadcnInput } from "@/components/ui/shadcn-input"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

const months = [
  { label: "01", value: "01" },
  { label: "02", value: "02" },
  { label: "03", value: "03" },
  { label: "04", value: "04" },
  { label: "05", value: "05" },
  { label: "06", value: "06" },
]
const years = [
  { label: "2025", value: "2025" },
  { label: "2026", value: "2026" },
  { label: "2027", value: "2027" },
]

function ShadcnFieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <ShadcnFieldGroup>
          <ShadcnFieldSet>
            <ShadcnFieldLegend>Payment Method</ShadcnFieldLegend>
            <ShadcnFieldDescription>
              All transactions are secure and encrypted
            </ShadcnFieldDescription>
            <ShadcnFieldGroup>
              <ShadcnField>
                <ShadcnFieldLabel htmlFor="field-demo-name">Name on Card</ShadcnFieldLabel>
                <ShadcnInput id="field-demo-name" placeholder="Evil Rabbit" required />
              </ShadcnField>
              <ShadcnField>
                <ShadcnFieldLabel htmlFor="field-demo-number">Card Number</ShadcnFieldLabel>
                <ShadcnInput id="field-demo-number" placeholder="1234 5678 9012 3456" required />
                <ShadcnFieldDescription>Enter your 16-digit card number</ShadcnFieldDescription>
              </ShadcnField>
              <div className="grid grid-cols-3 gap-4">
                <ShadcnField>
                  <ShadcnFieldLabel htmlFor="field-demo-month">Month</ShadcnFieldLabel>
                  <select id="field-demo-month" className="h-9 w-full rounded-md border border-border bg-background px-3 text-sm">
                    {months.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
                  </select>
                </ShadcnField>
                <ShadcnField>
                  <ShadcnFieldLabel htmlFor="field-demo-year">Year</ShadcnFieldLabel>
                  <select id="field-demo-year" className="h-9 w-full rounded-md border border-border bg-background px-3 text-sm">
                    {years.map((y) => <option key={y.value} value={y.value}>{y.label}</option>)}
                  </select>
                </ShadcnField>
                <ShadcnField>
                  <ShadcnFieldLabel htmlFor="field-demo-cvv">CVV</ShadcnFieldLabel>
                  <ShadcnInput id="field-demo-cvv" placeholder="123" required />
                </ShadcnField>
              </div>
            </ShadcnFieldGroup>
          </ShadcnFieldSet>
          <ShadcnFieldSeparator />
          <ShadcnFieldSet>
            <ShadcnFieldLegend>Billing Address</ShadcnFieldLegend>
            <ShadcnFieldDescription>
              The billing address associated with your payment method
            </ShadcnFieldDescription>
            <ShadcnFieldGroup>
              <ShadcnField orientation="horizontal">
                <Checkbox label="Same as shipping address" defaultSelected />
              </ShadcnField>
            </ShadcnFieldGroup>
          </ShadcnFieldSet>
          <ShadcnFieldSet>
            <ShadcnFieldGroup>
              <ShadcnField>
                <ShadcnFieldLabel htmlFor="field-demo-comments">Comments</ShadcnFieldLabel>
                <ShadcnTextarea id="field-demo-comments" placeholder="Add any additional comments" className="resize-none" />
              </ShadcnField>
            </ShadcnFieldGroup>
          </ShadcnFieldSet>
          <ShadcnField orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">Cancel</Button>
          </ShadcnField>
        </ShadcnFieldGroup>
      </form>
    </div>
  )
}

export { ShadcnFieldDemo }
