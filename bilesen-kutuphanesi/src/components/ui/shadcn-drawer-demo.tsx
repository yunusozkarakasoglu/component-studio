/**
 * ShadcnDrawerDemo
 * Temel örnek — teslimat süresi seçimi (saf React, shadcn kaynaklı).
 * RadioGroup: kütüphanenin mevcut bileşeni (Heroui — saf React).
 * @id 827
 * @category Overlay
 * @subcategory ShadcnDrawer
 * @source shadcn
 */
import { ShadcnBadge } from "@/components/ui/shadcn-badge"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnDrawer,
  ShadcnDrawerClose,
  ShadcnDrawerContent,
  ShadcnDrawerDescription,
  ShadcnDrawerFooter,
  ShadcnDrawerHeader,
  ShadcnDrawerTitle,
  ShadcnDrawerTrigger,
} from "@/components/ui/shadcn-drawer"
import { Radio, RadioGroup } from "@/components/ui/radio-group"

const deliveryTimes = [
  { value: "asap", label: "Standard delivery", description: "25–35 min · Driver assigned now", badge: "Fastest" },
  { value: "5-00", label: "5:00 PM – 5:15 PM", description: "Prep starts at 4:45 PM" },
  { value: "5-30", label: "5:30 PM – 5:45 PM", description: "Prep starts at 5:15 PM" },
]

function ShadcnDrawerDemo() {
  return (
    <ShadcnDrawer>
      <ShadcnDrawerTrigger>Open</ShadcnDrawerTrigger>
      <ShadcnDrawerContent>
        <ShadcnDrawerHeader>
          <ShadcnDrawerTitle>Delivery Options</ShadcnDrawerTitle>
          <ShadcnDrawerDescription>
            Select a delivery time for your order.
          </ShadcnDrawerDescription>
        </ShadcnDrawerHeader>
        <RadioGroup defaultValue="asap">
          {deliveryTimes.map((t) => (
            <Radio key={t.value} value={t.value} className="flex w-full items-start justify-between rounded-lg border border-border p-3">
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{t.label}</span>
                <span className="text-xs text-muted-foreground">{t.description}</span>
              </span>
              {t.badge && <ShadcnBadge variant="secondary">{t.badge}</ShadcnBadge>}
            </Radio>
          ))}
        </RadioGroup>
        <ShadcnDrawerFooter>
          <ShadcnButton className="w-full">Submit</ShadcnButton>
          <ShadcnDrawerClose className="w-full">Cancel</ShadcnDrawerClose>
        </ShadcnDrawerFooter>
      </ShadcnDrawerContent>
    </ShadcnDrawer>
  )
}

export { ShadcnDrawerDemo }
