/**
 * ShadcnAccordionBorders
 * Kenarlıklı akordeon (saf React, shadcn kaynaklı).
 * @id 868
 * @category Accordion
 * @subcategory ShadcnAccordion
 * @source shadcn
 */
import {
  ShadcnAccordion,
  ShadcnAccordionContent,
  ShadcnAccordionItem,
  ShadcnAccordionTrigger,
} from "@/components/ui/shadcn-accordion"

function ShadcnAccordionBorders() {
  return (
    <ShadcnAccordion type="single" className="max-w-lg rounded-lg border border-border px-4">
      <ShadcnAccordionItem value="one">
        <ShadcnAccordionTrigger value="one">Bordered item one</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="one">
          The whole accordion is wrapped in a border.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="two">
        <ShadcnAccordionTrigger value="two">Bordered item two</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="two">
          Items are separated by borders.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
    </ShadcnAccordion>
  )
}

export { ShadcnAccordionBorders }
