/**
 * MtMarqueePauseOnHover
 * Üzerine gelince dur (saf React, Mantine kaynaklı).
 * @id 1804
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueePauseOnHover() {
  return (
    <MtMarquee pauseOnHover>
      {["Üzerine", "Gelince", "Durur", "Animasyon"].map((t) => (
        <span key={t} className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">{t}</span>
      ))}
    </MtMarquee>
  )
}

export { MtMarqueePauseOnHover }
