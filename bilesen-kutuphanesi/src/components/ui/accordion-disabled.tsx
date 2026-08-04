/**
 * AccordionDisabled
 * HeroUI Disabled State örneği — tümü devre dışı + tek item devre dışı (saf React).
 * @id 110
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"

function AccordionDisabled() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="w-full max-w-md space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Entire accordion disabled</h3>
        <AccordionSimple isDisabled className="w-full max-w-md">
          <AccordionSimpleItem title="Disabled Item 1">This content cannot be accessed.</AccordionSimpleItem>
          <AccordionSimpleItem title="Disabled Item 2">This content cannot be accessed.</AccordionSimpleItem>
        </AccordionSimple>
      </div>
      <div className="w-full max-w-md space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Individual items disabled</h3>
        <AccordionSimple className="w-full max-w-md">
          <AccordionSimpleItem title="Active Item">This item can be toggled normally.</AccordionSimpleItem>
          <AccordionSimpleItem title="Disabled Item" isDisabled>This content cannot be accessed.</AccordionSimpleItem>
          <AccordionSimpleItem title="Another Active Item">This item is also active.</AccordionSimpleItem>
        </AccordionSimple>
      </div>
    </div>
  )
}

export { AccordionDisabled }
