/**
 * ShadcnTextareaButton
 * Butonlu örnek — metin alanı + gönder butonu (saf React, shadcn kaynaklı).
 * Buton: kütüphanenin mevcut Button'ı (Heroui — saf React).
 * @id 641
 * @category Form Elemanları
 * @subcategory ShadcnTextarea
 * @source shadcn
 */
import { Button } from "@/components/ui/button"
import { ShadcnTextarea } from "@/components/ui/shadcn-textarea"

function ShadcnTextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <ShadcnTextarea placeholder="Type your message here." />
      <Button className="w-fit">Send message</Button>
    </div>
  )
}

export { ShadcnTextareaButton }
