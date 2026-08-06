/**
 * ShadcnCardImage
 * Görselli kart — etkinlik tanıtımı (saf React, shadcn kaynaklı).
 * Not: kaynaktaki uzak görsel (avatar.vercel.sh) offline ilkesi gereği
 * yerel gradient placeholder ile değiştirildi.
 * @id 772
 * @category Kartlar
 * @subcategory ShadcnCard
 * @source shadcn
 */
import { ShadcnButton } from "@/components/ui/shadcn-button"
import {
  ShadcnCard,
  ShadcnCardAction,
  ShadcnCardDescription,
  ShadcnCardFooter,
  ShadcnCardHeader,
  ShadcnCardTitle,
} from "@/components/ui/shadcn-card"

function ShadcnCardImage() {
  return (
    <ShadcnCard className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <div className="relative z-20 flex aspect-video w-full items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 brightness-60">
        <span className="text-4xl text-white/90">🎨</span>
      </div>
      <ShadcnCardHeader>
        <ShadcnCardAction>
          <span className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground">Featured</span>
        </ShadcnCardAction>
        <ShadcnCardTitle>Design systems meetup</ShadcnCardTitle>
        <ShadcnCardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </ShadcnCardDescription>
      </ShadcnCardHeader>
      <ShadcnCardFooter>
        <ShadcnButton className="w-full">View Event</ShadcnButton>
      </ShadcnCardFooter>
    </ShadcnCard>
  )
}

export { ShadcnCardImage }
