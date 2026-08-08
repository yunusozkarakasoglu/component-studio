/**
 * MtKbdUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1570
 * @category Alert & Dialog
 * @subcategory MtKbd
 * @source mantine
 */
import { MtKbd } from "@/components/ui/mt-kbd"

function MtKbdUsage() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <MtKbd>Ctrl</MtKbd>
      <span className="text-muted-foreground">+</span>
      <MtKbd>Shift</MtKbd>
      <span className="text-muted-foreground">+</span>
      <MtKbd>S</MtKbd>
    </div>
  )
}

export { MtKbdUsage }
