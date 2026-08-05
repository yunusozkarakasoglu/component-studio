/**
 * KbdInstructionalText
 * Yönlendirici metin örneği (saf React).
 * @id 613
 * @category Genel
 * @subcategory KeyboardShortcuts
 */
import { Kbd, KbdAbbr } from "@/components/ui/kbd"

function KbdInstructionalText() {
  return (
    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
      <p>Mesajı göndermek için <Kbd size="sm"><KbdAbbr>⌘</KbdAbbr>Enter</Kbd></p>
      <p>Klavye kısayollarını görmek için <Kbd size="sm">?</Kbd> tuşuna basın</p>
      <p>Seçimi iptal etmek için <Kbd size="sm">Esc</Kbd></p>
    </div>
  )
}

export { KbdInstructionalText }
