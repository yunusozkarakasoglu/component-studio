/**
 * MtFloatingWindowConstrainOffset
 * Ofset kısıtlama (saf React, Mantine kaynaklı).
 * @id 1826
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowConstrainOffset() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Kısıtlı" initialPosition={{ x: 16, y: 16 }}>
        <p>Konum sabit başlangıçta.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowConstrainOffset }
