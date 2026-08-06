/**
 * ShadcnHoverCardSides
 * Yönler — top, right, bottom, left (saf React, shadcn kaynaklı).
 * @id 803
 * @category Overlay
 * @subcategory ShadcnHoverCard
 * @source shadcn
 */
import {
  ShadcnHoverCard,
  ShadcnHoverCardContent,
  ShadcnHoverCardTrigger,
} from "@/components/ui/shadcn-hover-card"

const SIDES = ["top", "right", "bottom", "left"] as const

function ShadcnHoverCardSides() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SIDES.map((side) => (
        <ShadcnHoverCard key={side}>
          <ShadcnHoverCardTrigger delay={100} closeDelay={100} className="capitalize">
            {side}
          </ShadcnHoverCardTrigger>
          <ShadcnHoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p>This hover card appears on the {side} side of the trigger.</p>
            </div>
          </ShadcnHoverCardContent>
        </ShadcnHoverCard>
      ))}
    </div>
  )
}

export { ShadcnHoverCardSides }
