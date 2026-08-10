/**
 * MuiAccordionBasic
 * @id 2018
 * @category Veri Gösterimi
 * @subcategory MuiAccordion
 * @source mui
 */
import { MuiAccordion } from "@/components/ui/mui-accordion"

function MuiAccordionBasic() {
  return (
    <MuiAccordion
      items={[
        { title: "Accordion nedir?", content: "Akordeon, içeriği bölümler halinde gizleyip tıklayınca genişleten bir arayüz bileşenidir." },
        { title: "Nasıl kullanılır?", content: "Başlığa tıklayınca içerik açılır/kapanır. Çoklu açık için multiple prop'unu kullanın." },
        { title: "Neden tercih edilir?", content: "Sayfa alanından tasarruf sağlar ve bilgiyi hiyerarşik sunar." },
      ]}
    />
  )
}

export { MuiAccordionBasic }
