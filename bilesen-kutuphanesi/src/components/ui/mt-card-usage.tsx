/**
 * MtCardUsage
 * Temel kart (saf React, Mantine kaynaklı).
 * @id 1450
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import { MtButton } from "@/components/ui/mt-button"
import { MtCard } from "@/components/ui/mt-card"
import { MtImage } from "@/components/ui/mt-image"
import { MtText } from "@/components/ui/mt-text"

function MtCardUsage() {
  return (
    <MtCard padding="lg" withBorder className="max-w-sm">
      <MtImage h={160} caption="Norway fjords" />
      <div className="mt-3 flex items-center justify-between">
        <MtText fw={600}>Norway Fjord Adventures</MtText>
        <span className="rounded-full bg-pink-100 px-2 py-0.5 text-xs font-semibold text-pink-700">On Sale</span>
      </div>
      <MtText size="sm" c="dimmed" className="mt-1">
        With Fjord Tours you can explore the magical fjord landscapes of Norway.
      </MtText>
      <MtButton fullWidth className="mt-4">Book classic tour now</MtButton>
    </MtCard>
  )
}

export { MtCardUsage }
