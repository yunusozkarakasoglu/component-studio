/**
 * MtMarqueeMultipleRows
 * Çok satır (saf React, Mantine kaynaklı).
 * @id 1803
 * @category Özel Komponentler
 * @subcategory MtMarquee
 * @source mantine
 */
import { MtMarquee } from "@/components/ui/mt-marquee"

function MtMarqueeMultipleRows() {
  return (
    <div className="flex flex-col gap-3">
      <MtMarquee speed={20}>
        {["Satır", "Bir", "Akan", "Metin"].map((t) => <span key={t} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">{t}</span>)}
      </MtMarquee>
      <MtMarquee speed={35} reverse>
        {["Satır", "İki", "Ters", "Yön"].map((t) => <span key={t} className="rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-700">{t}</span>)}
      </MtMarquee>
    </div>
  )
}

export { MtMarqueeMultipleRows }
