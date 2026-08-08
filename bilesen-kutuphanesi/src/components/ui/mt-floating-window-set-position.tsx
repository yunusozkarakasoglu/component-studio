/**
 * MtFloatingWindowSetPosition
 * Konum ayarla (saf React, Mantine kaynaklı).
 * @id 1832
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowSetPosition() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Konumlu" initialPosition={{ x: 120, y: 100 }}>
        <p>Başlangıç konumu verildi.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowSetPosition }
