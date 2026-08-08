/**
 * MtFloatingWindowAxis
 * Eksen (saf React, Mantine kaynaklı).
 * @id 1825
 * @category Özel Komponentler
 * @subcategory MtFloatingWindow
 * @source mantine
 */
import { MtFloatingWindow } from "@/components/ui/mt-floating-window"

function MtFloatingWindowAxis() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-xl border border-border bg-muted/20">
      <MtFloatingWindow title="Yalnızca Y ekseni" initialPosition={{ x: 40, y: 60 }}>
        <p>Sadece dikey sürüklenebilir.</p>
      </MtFloatingWindow>
    </div>
  )
}

export { MtFloatingWindowAxis }
