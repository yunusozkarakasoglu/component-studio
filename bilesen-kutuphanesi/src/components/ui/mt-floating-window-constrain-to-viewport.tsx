/**
 * MtFloatingWindowConstrainToViewport
 * Görünüme sığdır (saf React, Mantine kaynaklı).
 * @id 1827
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowConstrainToViewport() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Görünüme sığdır" initialPosition={{ x: 60, y: 40 }}>
        <p>Kapsayıcı dışına taşmaz.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowConstrainToViewport }
