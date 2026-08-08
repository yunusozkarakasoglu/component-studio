/**
 * MtFloatingWindowResizeHandle
 * Boyut tutamacı (saf React, Mantine kaynaklı).
 * @id 1831
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowResizeHandle() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Tutamaçlı boyut" initialPosition={{ x: 50, y: 40 }}>
        <p>Boyut tutamacı etkin.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowResizeHandle }
