/**
 * MtPillUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1494
 * @category Veri Gösterimi
 * @subcategory MtPill
 * @source mantine
 */
import { MtPill } from "@/components/ui/mt-pill"

function MtPillUsage() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <MtPill>React</MtPill>
      <MtPill>TypeScript</MtPill>
      <MtPill>Tailwind CSS</MtPill>
      <MtPill>Mantine</MtPill>
    </div>
  )
}

export { MtPillUsage }
