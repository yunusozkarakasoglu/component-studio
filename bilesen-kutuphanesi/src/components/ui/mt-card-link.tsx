/**
 * MtCardLink
 * Kart bağlantısı (saf React, Mantine kaynaklı).
 * @id 1454
 * @category Veri Gösterimi
 * @subcategory MtCard
 * @source mantine
 */
import { MtCard } from "@/components/ui/mt-card"
import { MtText } from "@/components/ui/mt-text"

function MtCardLink() {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="block max-w-sm rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500/40">
      <MtCard padding="lg" withBorder className="transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <MtText fw={600}>GitHub repository</MtText>
        <MtText size="sm" c="dimmed" className="mt-1">
          Star the repository and follow the releases to stay up to date.
        </MtText>
      </MtCard>
    </a>
  )
}

export { MtCardLink }
