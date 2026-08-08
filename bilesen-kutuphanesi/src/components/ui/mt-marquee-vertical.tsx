/**
 * MtMarqueeVertical
 * Dikey (saf React, Mantine kaynaklı).
 * @id 1806
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueeVertical() {
  return (
    <MtMarquee direction="up" speed={25}>
      {["Dikey", "Akan", "Liste", "Öğesi"].map((t) => (
        <div key={t} className="rounded-lg bg-orange-100 px-4 py-3 text-sm font-medium text-orange-700">{t}</div>
      ))}
    </MtMarquee>
  )
}

export { MtMarqueeVertical }
