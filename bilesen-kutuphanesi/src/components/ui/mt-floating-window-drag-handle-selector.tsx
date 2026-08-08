/**
 * MtFloatingWindowDragHandleSelector
 * Sürükleme tutamacı (saf React, Mantine kaynaklı).
 * @id 1828
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowDragHandleSelector() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Tutamaç: başlık" initialPosition={{ x: 80, y: 50 }}>
        <p>Yalnızca başlık çubuğundan sürüklenir.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowDragHandleSelector }
