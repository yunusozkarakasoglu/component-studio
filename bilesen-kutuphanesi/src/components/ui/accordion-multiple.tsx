/**
 * AccordionMultiple
 * Multiple Expanded örneği — çoklu açılma (saf React).
 * @id 109
 * @category Accordion
 */
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"

const items = [
  { title: "Getting Started", content: "Learn the basics and how to integrate it into your React project." },
  { title: "Core Concepts", content: "Understand the fundamental concepts, including the compound component pattern and accessibility." },
  { title: "Advanced Usage", content: "Explore advanced features like custom variants and theme customization." },
  { title: "Best Practices", content: "Follow our recommended best practices for performant, accessible applications." },
]

function AccordionMultiple() {
  return (
    <AccordionSimple className="w-full max-w-md" allowsMultiple defaultValue={["0"]}>
      {items.map((item, i) => (
        <AccordionSimpleItem key={i} itemKey={String(i)} title={item.title}>
          {item.content}
        </AccordionSimpleItem>
      ))}
    </AccordionSimple>
  )
}

export { AccordionMultiple }
