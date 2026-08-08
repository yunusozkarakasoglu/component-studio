/**
 * MtSpoilerTransition
 * Farklı yükseklik (saf React, Mantine kaynaklı).
 * @id 1582
 * @category Alert & Dialog
 * @subcategory MtSpoiler
 * @source mantine
 */
import { MtSpoiler } from "@/components/ui/mt-spoiler"

const text = `Gizli içerik örneği. Bu bölüm yalnızca "Göster" butonuna basıldığında
görünür hale gelir. Kullanıcı metnin tamamını görmek istediğinde buton
yönlendirici görevi görür ve içerik aşağı doğru açılır.`

function MtSpoilerTransition() {
  return (
    <div className="flex flex-col gap-3">
      <MtSpoiler maxHeight={60} showLabel="Göster" hideLabel="Gizle" className="max-w-md">{text}</MtSpoiler>
      <MtSpoiler maxHeight={100} showLabel="Daha fazla" hideLabel="Daha az" className="max-w-md">{text}</MtSpoiler>
    </div>
  )
}

export { MtSpoilerTransition }
