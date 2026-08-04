/**
 * AccordionRenderFunction
 * Render Function örneği — data-custom attribute gösterimi (saf React).
 * Heroui'nin render prop'u yerine bileşenlerin data-slot/data-custom attribute'ları.
 * @id 113
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { ShoppingBag } from "@/components/ui/icons"

function AccordionRenderFunction() {
  return (
    <AccordionSimple className="w-full max-w-md" data-custom="accordion">
      <AccordionSimpleItem title="How do I place an order?" icon={<ShoppingBag />} data-custom="item">
        Browse our products, add items to your cart, and proceed to checkout.
      </AccordionSimpleItem>
      <AccordionSimpleItem title="Can I modify or cancel my order?" data-custom="item">
        Yes, you can modify or cancel your order before it's shipped.
      </AccordionSimpleItem>
    </AccordionSimple>
  )
}

export { AccordionRenderFunction }
