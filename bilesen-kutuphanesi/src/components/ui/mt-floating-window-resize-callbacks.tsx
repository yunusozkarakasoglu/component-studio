/**
 * MtFloatingWindowResizeCallbacks
 * Boyut geri çağrıları (saf React, Mantine kaynaklı).
 * @id 1830
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowResizeCallbacks() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Boyutlandırılabilir" initialPosition={{ x: 30, y: 70 }}>
        <p>Sağ alttan sürükleyerek boyut değiştirin.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowResizeCallbacks }
