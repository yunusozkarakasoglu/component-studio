/**
 * MtFloatingWindowUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1833
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowUsage() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Notlar">
        <p>Bu pencere sürüklenebilir ve sağ alttan yeniden boyutlandırılabilir.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowUsage }
