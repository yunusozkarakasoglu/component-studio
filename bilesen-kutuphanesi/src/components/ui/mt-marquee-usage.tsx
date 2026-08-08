/**
 * MtMarqueeUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1805
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueeUsage() {
  return (
    <MtMarquee>
      {["React", "TypeScript", "Tailwind", "Mantine", "Vite"].map((t) => (
        <span key={t} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">{t}</span>
      ))}
    </MtMarquee>
  )
}

export { MtMarqueeUsage }
