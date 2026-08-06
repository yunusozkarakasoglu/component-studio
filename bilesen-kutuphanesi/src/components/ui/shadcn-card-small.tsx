/**
 * ShadcnCardSmall
 * Küçük kart — özellik tanıtımı (saf React, shadcn kaynaklı).
 * @id 769
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { ChevronRight } from "@/components/ui/icons"
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnCard,
  ShadcnCardContent,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"

function ShadcnCardSmall() {
  const featureName = "Scheduled reports"

  return (
    <ShadcnCard size="sm" className="mx-auto w-full max-w-xs">
      <ShadcnCardHeader>
        <ShadcnCardTitle>{featureName}</ShadcnCardTitle>
        <ShadcnCardDescription>
          Weekly snapshots. No more manual exports.
        </ShadcnCardDescription>
      </ShadcnCardHeader>
      <ShadcnCardContent>
        <ul className="grid gap-2 py-2 text-sm">
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Choose a schedule (daily, or weekly).</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Send to channels or specific teammates.</span>
          </li>
          <li className="flex gap-2">
            <ChevronRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            <span>Include charts, tables, and key metrics.</span>
          </li>
        </ul>
      </ShadcnCardContent>
      <ShadcnCardFooter className="flex-col gap-2">
        <ShadcnButton size="sm" className="w-full">Set up scheduled reports</ShadcnButton>
        <ShadcnButton variant="outline" size="sm" className="w-full">See what&apos;s new</ShadcnButton>
      </ShadcnCardFooter>
    </ShadcnCard>
  )
}

export { ShadcnCardSmall }
