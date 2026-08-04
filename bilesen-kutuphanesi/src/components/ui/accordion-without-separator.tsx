/**
 * AccordionWithoutSeparator
 * Without Separator örneği — ayraçsız (saf React).
 * @id 108
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { CreditCard, Receipt, ShoppingBag } from "@/components/ui/icons"

const items = [
  { icon: <ShoppingBag />, title: "How do I place an order?", content: "Browse our products, add items to your cart, and proceed to checkout." },
  { icon: <Receipt />, title: "Can I modify or cancel my order?", content: "Yes, you can modify or cancel your order before it's shipped." },
  { icon: <CreditCard />, title: "What payment methods do you accept?", content: "We accept all major credit cards, including Visa, Mastercard." },
]

function AccordionWithoutSeparator() {
  return (
    <AccordionSimple className="w-full max-w-md" hideSeparator>
      {items.map((item, i) => (
        <AccordionSimpleItem key={i} itemKey={String(i)} title={item.title} icon={item.icon}>
          {item.content}
        </AccordionSimpleItem>
      ))}
    </AccordionSimple>
  )
}

export { AccordionWithoutSeparator }
