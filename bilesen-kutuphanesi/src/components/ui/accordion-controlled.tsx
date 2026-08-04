/**
 * AccordionControlled
 * HeroUI Controlled örneği — kontrollü açık item + önceki/sonraki navigasyon (saf React).
 * useDisclosureGroupNavigation (Heroui'ye özel) yerine saf useState.
 * @id 111
 * @category Accordion
 */
import { useState } from "react"
import { AccordionSimple, AccordionSimpleItem } from "@/components/ui/accordion-simple"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "@/components/ui/icons"

const items = [
  { id: "getting-started", title: "Getting Started", content: "Learn the basics of HeroUI and how to integrate it into your React project." },
  { id: "core-concepts", title: "Core Concepts", content: "Understand the fundamental concepts behind HeroUI." },
  { id: "advanced-usage", title: "Advanced Usage", content: "Explore advanced features like custom variants." },
]

function AccordionControlled() {
  const [expanded, setExpanded] = useState<string[]>(["getting-started"])
  const idx = expanded.length ? Math.max(0, items.findIndex((i) => i.id === expanded[0])) : -1
  const go = (delta: number) => {
    const next = Math.min(items.length - 1, Math.max(0, idx + delta))
    setExpanded([items[next].id])
  }
  return (
    <div className="w-full max-w-md">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Expanded: <strong>{expanded.join(", ") || "none"}</strong>
        </p>
        <div className="flex gap-2">
          <Button aria-label="Previous item" isDisabled={idx <= 0} size="sm" variant="secondary" onPress={() => go(-1)}>
            <ChevronUp className="size-4" />
          </Button>
          <Button aria-label="Next item" isDisabled={idx >= items.length - 1} size="sm" variant="secondary" onPress={() => go(1)}>
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>
      <AccordionSimple value={expanded} onChange={(keys) => setExpanded(keys.map(String))}>
        {items.map((item) => (
          <AccordionSimpleItem key={item.id} itemKey={item.id} title={item.title}>
            {item.content}
          </AccordionSimpleItem>
        ))}
      </AccordionSimple>
    </div>
  )
}

export { AccordionControlled }
