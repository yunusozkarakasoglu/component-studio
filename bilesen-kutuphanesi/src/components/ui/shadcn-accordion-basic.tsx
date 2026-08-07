/**
 * ShadcnAccordionBasic
 * Temel akordeon (saf React, shadcn kaynaklı).
 * @id 865
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

function ShadcnAccordionBasic() {
  return (
    <ShadcnAccordion type="single" className="max-w-lg">
      <ShadcnAccordionItem value="one">
        <ShadcnAccordionTrigger value="one">Is it accessible?</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="one">Yes. It adheres to the WAI-ARIA design pattern.</ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="two">
        <ShadcnAccordionTrigger value="two">Is it styled?</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="two">Yes. It comes with default styles that match the other components.</ShadcnAccordionContent>
      </ShadcnAccordionItem>
    </ShadcnAccordion>
  )
}

export { ShadcnAccordionBasic }
