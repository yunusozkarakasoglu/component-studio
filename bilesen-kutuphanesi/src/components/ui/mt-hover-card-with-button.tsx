/**
 * MtHoverCardWithButton
 * Butonlu hover kart (saf React, Mantine kaynaklı).
 * @id 1380
 * @category Overlay
 * @subcategory MtHoverCard
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtHoverCard, MtHoverCardDropdown, MtHoverCardTarget } from "@/components/ui/mt-hover-card"

function MtHoverCardWithButton() {
  return (
    <MtHoverCard>
      <MtHoverCardTarget>
        <MtButton variant="outline">Hover me</MtButton>
      </MtHoverCardTarget>
      <MtHoverCardDropdown>
        <p className="text-sm font-medium">Hover card</p>
        <p className="mt-1 text-sm text-muted-foreground">Content appears when you hover the trigger.</p>
      </MtHoverCardDropdown>
    </MtHoverCard>
  )
}

export { MtHoverCardWithButton }
