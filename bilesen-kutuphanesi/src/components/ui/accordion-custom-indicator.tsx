/**
 * AccordionCustomIndicator
 * Custom Indicator örneği — özel gösterge ikonları (saf React).
 * GravityUI eşleştirmesi: CircleChevronDown→ChevronDownCircle.
 * indicator fonksiyon olarak verilirse açık/kapalı durumunu alır.
 * @id 112
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { ChevronDownCircle, ChevronsDown, Minus, Plus } from "@/components/ui/icons"

function AccordionCustomIndicator() {
  return (
    <AccordionSimple className="w-full max-w-md" variant="surface" hideSeparator defaultValue={["1"]}>
      <AccordionSimpleItem
        itemKey="1"
        title="Using Plus/Minus Icon"
        indicator={(open) => (open ? <Minus className="size-4" /> : <Plus className="size-4" />)}
      >
        This accordion uses a plus icon that transforms when expanded.
      </AccordionSimpleItem>
      <AccordionSimpleItem itemKey="2" title="Using Caret Icon" indicator={<ChevronDownCircle className="size-4" />}>
        This item uses a caret icon for the indicator.
      </AccordionSimpleItem>
      <AccordionSimpleItem itemKey="3" title="Using Arrow Icon" indicator={<ChevronsDown className="size-4" />}>
        This item uses an arrow icon. Any icon you pass receives rotation on expand.
      </AccordionSimpleItem>
    </AccordionSimple>
  )
}

export { AccordionCustomIndicator }
