/**
 * MtMarkUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1580
 * @category Alert & Dialog
 * @subcategory MtMark
 * @source mantine
 */
import { MtMark } from "@/components/ui/mt-mark"

function MtMarkUsage() {
  return (
    <div className="flex flex-col gap-2 text-sm text-foreground">
      <p><MtMark>Varsayılan sarı</MtMark> kalem vurgusu</p>
      <p><MtMark color="blue">Mavi</MtMark> ve <MtMark color="green">yeşil</MtMark> varyantlar</p>
      <p><MtMark color="red">Kritik</MtMark> bölümler kırmızı işaretlenir</p>
    </div>
  )
}

export { MtMarkUsage }
