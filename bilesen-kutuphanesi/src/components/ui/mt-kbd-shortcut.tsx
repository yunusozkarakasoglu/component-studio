/**
 * MtKbdShortcut
 * Kısayollar (saf React, Mantine kaynaklı).
 * @id 1571
 * @category Alert & Dialog
 * @subcategory MtKbd
 * @source mantine
 */
import { MtKbd } from "@/components/ui/mt-kbd"

function MtKbdShortcut() {
  return (
    <div className="flex flex-col gap-2 text-sm text-foreground">
      <div className="flex items-center justify-between border-b border-border pb-1.5">
        <span>Yeni dosya</span>
        <span className="flex gap-1"><MtKbd>Ctrl</MtKbd><MtKbd>N</MtKbd></span>
      </div>
      <div className="flex items-center justify-between border-b border-border pb-1.5">
        <span>Komut paleti</span>
        <span className="flex gap-1"><MtKbd>Ctrl</MtKbd><MtKbd>K</MtKbd></span>
      </div>
      <div className="flex items-center justify-between">
        <span>Tümünü seç</span>
        <span className="flex gap-1"><MtKbd>Ctrl</MtKbd><MtKbd>A</MtKbd></span>
      </div>
    </div>
  )
}

export { MtKbdShortcut }
