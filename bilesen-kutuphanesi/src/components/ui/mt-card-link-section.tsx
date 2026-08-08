/**
 * MtCardLinkSection
 * Link bölümlü kart (saf React, Mantine kaynaklı).
 * @id 1453
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import { ArrowRight } from "@/components/ui/icons"
import { MtCard } from "@/components/ui/mt-card"
import { MtText } from "@/components/ui/mt-text"

function MtCardLinkSection() {
  return (
    <MtCard padding="lg" withBorder className="max-w-sm transition-colors hover:bg-muted/30">
      <MtText fw={600}>View documentation</MtText>
      <MtText size="sm" c="dimmed" className="mt-1">
        Learn how to use every component with interactive examples.
      </MtText>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <MtText size="sm" c="blue" fw={500}>Open docs</MtText>
        <ArrowRight className="size-4 text-blue-600" />
      </div>
    </MtCard>
  )
}

export { MtCardLinkSection }
