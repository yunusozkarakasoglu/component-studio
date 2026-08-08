/**
 * MtCardSectionDemo
 * CardSection kullanımı (saf React, Mantine kaynaklı).
 * @id 1451
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import { MtCard } from "@/components/ui/mt-card"
import { MtImage } from "@/components/ui/mt-image"
import { MtText } from "@/components/ui/mt-text"

function MtCardSectionDemo() {
  return (
    <MtCard padding="lg" withBorder className="max-w-sm">
      <div className="-mx-6 -mt-6 mb-4">
        <MtImage h={140} caption="Section image" />
      </div>
      <MtText fw={600}>Card with image section</MtText>
      <MtText size="sm" c="dimmed">The image stretches edge to edge as a Card.Section.</MtText>
    </MtCard>
  )
}

export { MtCardSectionDemo }
