/**
 * AccordionBasic
 * HeroUI Usage örneği — ikonlu FAQ accordion (saf React).
 * GravityUI eşleştirmesi: PlanetEarth→Earth, ArrowsRotateLeft→RotateCcw.
 * @id 106
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { Box, CreditCard, Earth, Receipt, RotateCcw, ShoppingBag } from "@/components/ui/icons"

const items = [
  { icon: <ShoppingBag />, title: "How do I place an order?", content: "Browse our products, add items to your cart, and proceed to checkout." },
  { icon: <Receipt />, title: "Can I modify or cancel my order?", content: "Yes, you can modify or cancel your order before it's shipped." },
  { icon: <CreditCard />, title: "What payment methods do you accept?", content: "We accept all major credit cards, including Visa, Mastercard, and American Express." },
  { icon: <Box />, title: "How much does shipping cost?", content: "Shipping costs vary based on your location and the size of your order." },
  { icon: <Earth />, title: "Do you ship internationally?", content: "Yes, we ship to most countries. Please check our shipping rates and policies." },
  { icon: <RotateCcw />, title: "How do I request a refund?", content: "If you're not satisfied, you can request a refund within 30 days of purchase." },
]

function AccordionBasic() {
  return (
    <AccordionSimple className="w-full max-w-md">
      {items.map((item, i) => (
        <AccordionSimpleItem key={i} itemKey={String(i)} title={item.title} icon={item.icon}>
          {item.content}
        </AccordionSimpleItem>
      ))}
    </AccordionSimple>
  )
}

export { AccordionBasic }
