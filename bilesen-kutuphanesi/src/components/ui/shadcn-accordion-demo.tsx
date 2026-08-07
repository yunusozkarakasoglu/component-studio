/**
 * ShadcnAccordionDemo
 * Temel örnek — SSS (saf React, shadcn kaynaklı).
 * @id 864
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

function ShadcnAccordionDemo() {
  return (
    <ShadcnAccordion type="single" defaultValue={["shipping"]} className="max-w-lg">
      <ShadcnAccordionItem value="shipping">
        <ShadcnAccordionTrigger value="shipping">What are your shipping options?</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="shipping">
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="returns">
        <ShadcnAccordionTrigger value="returns">What is your return policy?</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="returns">
          Returns accepted within 30 days. Items must be unused and in original packaging.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
      <ShadcnAccordionItem value="support">
        <ShadcnAccordionTrigger value="support">How can I contact customer support?</ShadcnAccordionTrigger>
        <ShadcnAccordionContent value="support">
          Reach us via email, live chat, or phone. We respond within 24 hours.
        </ShadcnAccordionContent>
      </ShadcnAccordionItem>
    </ShadcnAccordion>
  )
}

export { ShadcnAccordionDemo }
