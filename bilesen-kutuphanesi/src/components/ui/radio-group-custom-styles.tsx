/**
 * RadioGroupCustomStyles
 * Özelleştirilmiş örnek — faturalama döngüsü kartları (saf React).
 * @id 400
 * @category Seçim
 * @subcategory RadioGroup
 */
import { Description } from "@/components/ui/description"
import { Label } from "@/components/ui/label"
import { Radio, RadioContent, RadioControl, RadioGroup, RadioIndicator } from "@/components/ui/radio-group"

const options = [
  { description: "$12 billed every month", label: "Monthly", value: "monthly" },
  { description: "$120 billed once a year", label: "Yearly", value: "yearly" },
] as const

const contentClassName =
  "group flex w-full items-start gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-4 py-3 transition-colors data-[selected=true]:border-emerald-500/30 data-[selected=true]:bg-emerald-500/10"

function RadioGroupCustomStyles() {
  return (
    <RadioGroup
      className="w-full max-w-sm gap-3"
      defaultValue="yearly"
      name="billing"
      variant="secondary"
    >
      <Label className="font-medium text-foreground">Billing cycle</Label>
      <Description>Choose how often you are charged.</Description>
      {options.map(({ description, label, value }) => (
        <Radio key={value} value={value} className="w-full">
          <RadioContent className={contentClassName}>
            <RadioControl className="mt-0.5 size-5 rounded-full border border-border data-[selected=true]:border-emerald-600 data-[selected=true]:bg-emerald-600">
              <RadioIndicator className="data-[selected=true]:opacity-100" />
            </RadioControl>
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-foreground">{label}</span>
              <Description>{description}</Description>
            </div>
          </RadioContent>
        </Radio>
      ))}
    </RadioGroup>
  )
}

export { RadioGroupCustomStyles }
