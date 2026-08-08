/**
 * MtFloatingWindowEnabled
 * Etkin (saf React, Mantine kaynaklı).
 * @id 1829
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowEnabled() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Devre dışı" initialPosition={{ x: 90, y: 30 }}>
        <p>Varsayılan davranış: sürükle + boyutlandır.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowEnabled }
