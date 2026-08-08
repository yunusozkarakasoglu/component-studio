/**
 * MtScrollAreaScrollbars
 * Kaydırma çubukları (saf React, Mantine kaynaklı).
 * @id 1778
 * @category Özel Komponentler
 * @subcategory MtScrollArea
 * @source mantine
 */
import { MtScrollArea } from "@/components/ui/mt-scroll-area"

function MtScrollAreaScrollbars() {
  return (
    <MtScrollArea h={160} type="always" className="w-72 rounded-lg border border-border bg-muted/20 p-3">
      {Array.from({ length: 18 }, (_, i) => (
        <p key={i} className="mb-2 text-sm text-foreground">Her zaman görünür çubuk — satır {i + 1}</p>
      ))}
    </MtScrollArea>
  )
}

export { MtScrollAreaScrollbars }
