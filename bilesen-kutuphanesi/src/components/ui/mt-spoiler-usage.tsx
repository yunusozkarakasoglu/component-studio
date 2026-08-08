/**
 * MtSpoilerUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1581
 * @category Alert & Dialog
 * @subcategory MtSpoiler
 * @source mantine
 */
import { MtSpoiler } from "@/components/ui/mt-spoiler"

const text = `Mantine, 100'den fazla özelleştirilebilir bileşen ve hook içeren bir React kütüphanesidir.
Bileşenler erişilebilirlik düşünülerek tasarlanmıştır — klavye navigasyonu, ARIA öznitelikleri
ve ekran okuyucu desteği her bileşende varsayılan olarak gelir. Renk şemaları, koyu/açık tema
ve yazı tipi ölçekleri tamamen özelleştirilebilir; yalnızca ihtiyacınız olan bileşenleri
import ederek paket boyutunu küçük tutabilirsiniz.`

function MtSpoilerUsage() {
  return (
    <MtSpoiler maxHeight={80} showLabel="Daha fazla göster" hideLabel="Gizle" className="max-w-md">
      {text}
    </MtSpoiler>
  )
}

export { MtSpoilerUsage }
