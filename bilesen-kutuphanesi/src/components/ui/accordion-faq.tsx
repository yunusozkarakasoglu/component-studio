/**
 * AccordionFaq
 * FAQ Layout örneği — kategorili SSS (saf React).
 * @id 114
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"

const categories = [
  {
    title: "General",
    items: [
      { title: "How do I place an order?", content: "Browse our products, add items to your cart, and proceed to checkout." },
      { title: "Can I modify or cancel my order?", content: "Yes, you can modify or cancel your order before it's shipped." },
    ],
  },
  {
    title: "Licensing",
    items: [
      { title: "How do I purchase a license?", content: "You can purchase a license directly from our website." },
      { title: "Standard vs pro?", content: "A standard license is for personal use, pro includes commercial rights." },
    ],
  },
  {
    title: "Support",
    items: [{ title: "How do I get support?", content: "Reach our support team through the contact form on our website." }],
  },
]

function AccordionFaq() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <p className="mb-4 text-lg font-medium text-muted-foreground">Everything you need to know about licensing and usage.</p>
      </div>
      {categories.map((cat) => (
        <div key={cat.title}>
          <p className="mb-2 font-medium text-muted-foreground">{cat.title}</p>
          <AccordionSimple className="w-full" variant="surface" hideSeparator>
            {cat.items.map((item, i) => (
              <AccordionSimpleItem key={i} itemKey={cat.title + i} title={item.title}>
                {item.content}
              </AccordionSimpleItem>
            ))}
          </AccordionSimple>
        </div>
      ))}
    </div>
  )
}

export { AccordionFaq }
