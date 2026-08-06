/**
 * ShadcnHoverCardDemo
 * Temel örnek — profil kartı (saf React, shadcn kaynaklı).
 * @id 802
 * @category Overlay
 * @subcategory ShadcnHoverCard
 * @source shadcn
 */
import {
  ShadcnHoverCard,
  ShadcnHoverCardContent,
  ShadcnHoverCardTrigger,
} from "@/components/ui/shadcn-hover-card"

function ShadcnHoverCardDemo() {
  return (
    <ShadcnHoverCard>
      <ShadcnHoverCardTrigger delay={10} closeDelay={100}>Hover Here</ShadcnHoverCardTrigger>
      <ShadcnHoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>The React Framework – created and maintained by @vercel.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined December 2021
        </div>
      </ShadcnHoverCardContent>
    </ShadcnHoverCard>
  )
}

export { ShadcnHoverCardDemo }
