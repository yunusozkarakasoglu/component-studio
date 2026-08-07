/**
 * ShadcnAccordionMultiple
 * Çoklu açılım (saf React, shadcn kaynaklı).
 * @id 866
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

function ShadcnAccordionMultiple() {
  return (
    <ShadcnAccordion type="multiple" defaultValue={["one"]} className="max-w-lg">
      <ShadcnAccordionItem value="one">
        <ShadcnAccordionTrigger value="one">First item</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="one">
          Multiple items can be open at the same time.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="two">
        <ShadcnAccordionTrigger value="two">Second item</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="two">
          Use type="multiple" to allow this behavior.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
    </ShadcnAccordion>
  )
}

export { ShadcnAccordionMultiple }
