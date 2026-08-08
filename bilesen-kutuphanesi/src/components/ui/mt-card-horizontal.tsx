/**
 * MtCardHorizontal
 * Yatay kart (saf React, Mantine kaynaklı).
 * @id 1452
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import { MtAvatar } from "@/components/ui/mt-avatar"
import { MtCard } from "@/components/ui/mt-card"
import { MtText } from "@/components/ui/mt-text"

function MtCardHorizontal() {
  return (
    <MtCard padding="md" withBorder className="max-w-md">
      <div className="flex items-center gap-4">
        <MtAvatar size="xl" radius="md" color="blue" gradient={{ from: "blue", to: "cyan" }}>Y</MtAvatar>
        <div className="min-w-0">
          <MtText fw={600}>Yunus Özkarakaşoğlu</MtText>
          <MtText size="sm" c="dimmed">Frontend developer — 3+ years experience with React ecosystem.</MtText>
        </div>
      </div>
    </MtCard>
  )
}

export { MtCardHorizontal }
