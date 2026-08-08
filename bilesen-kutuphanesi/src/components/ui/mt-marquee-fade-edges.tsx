/**
 * MtMarqueeFadeEdges
 * Kenar solması (saf React, Mantine kaynaklı).
 * @id 1802
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueeFadeEdges() {
  return (
    <MtMarquee fadeEdges>
      {["Sol", "Kenar", "Yumuşak", "Geçiş"].map((t) => (
        <span key={t} className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">{t}</span>
      ))}
    </MtMarquee>
  )
}

export { MtMarqueeFadeEdges }
