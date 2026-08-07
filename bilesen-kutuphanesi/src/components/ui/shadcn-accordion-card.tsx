/**
 * ShadcnAccordionCard
 * Kart içinde akordeon (saf React, shadcn kaynaklı).
 * Card: kütüphanenin mevcut ShadcnCard'ı.
 * @id 869
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
import {
  ShadcnCard,
  ShadcnCardDescription,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"

function ShadcnAccordionCard() {
  return (
    <ShadcnCard className="mx-auto w-full max-w-lg">
      <ShadcnCardHeader>
        <ShadcnCardTitle>Frequently Asked Questions</ShadcnCardTitle>
        <ShadcnCardDescription>
          Answers to the most common questions about our product.
        </ShadcnCardDescription>
      </ShadcnCardHeader>
      <ShadcnAccordion type="single">
        <ShadcnAccordionItem value="billing">
          <ShadcnAccordionTrigger value="billing">How does billing work?</ShadcnAccordionTrigger>
          <ShadcnAccordionContent value="billing">
            You will be billed monthly or yearly based on your plan.
          </ShadcnAccordionContent>
        </ShadcnAccordionItem>
        <ShadcnAccordionItem value="cancel">
          <ShadcnAccordionTrigger value="cancel">Can I cancel anytime?</ShadcnAccordionTrigger>
          <ShadcnAccordionContent value="cancel">
            Yes, you can cancel your subscription at any time.
          </ShadcnAccordionContent>
        </ShadcnAccordionItem>
        <ShadcnAccordionItem value="trial">
          <ShadcnAccordionTrigger value="trial">Is there a free trial?</ShadcnAccordionTrigger>
          <ShadcnAccordionContent value="trial">
            Yes, all plans start with a 14-day free trial.
          </ShadcnAccordionContent>
        </ShadcnAccordionItem>
      </ShadcnAccordion>
    </ShadcnCard>
  )
}

export { ShadcnAccordionCard }
