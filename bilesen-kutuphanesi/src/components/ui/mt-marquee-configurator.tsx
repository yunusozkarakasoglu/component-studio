/**
 * MtMarqueeConfigurator
 * Yapılandırıcı (saf React, Mantine kaynaklı).
 * @id 1801
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueeConfigurator() {
  return (
    <MtMarquee speed={12}>
      {["Hızlı", "Kayan", "Şerit", "Animasyonu"].map((t) => (
        <span key={t} className="rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700">{t}</span>
      ))}
    </MtMarquee>
  )
}

export { MtMarqueeConfigurator }
