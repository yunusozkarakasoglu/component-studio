/**
 * ShadcnAccordionDisabled
 * Devre dışı öğe (saf React, shadcn kaynaklı).
 * @id 867
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

function ShadcnAccordionDisabled() {
  return (
    <ShadcnAccordion type="single" className="max-w-lg">
      <ShadcnAccordionItem value="enabled">
        <ShadcnAccordionTrigger value="enabled">Enabled item</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="enabled">
          This item can be expanded.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="disabled" isDisabled>
        <ShadcnAccordionTrigger value="disabled" disabled>
          Disabled item
        </ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="disabled">
          This item cannot be expanded.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
    </ShadcnAccordion>
  )
}

export { ShadcnAccordionDisabled }
