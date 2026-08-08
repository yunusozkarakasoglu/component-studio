/**
 * MtCollapseTransition
 * Geçiş süresi (saf React, Mantine kaynaklı).
 * @id 1584
 * @category Alert & Dialog
 * @subcategory MtCollapse
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtCollapse } from "@/components/ui/mt-collapse"

function MtCollapseTransition() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <MtButton variant="default" onClick={() => setOpened((o) => !o)}>Hızlı geçiş (200ms)</MtButton>
      <MtCollapse in={opened} transitionDuration={600}>
        <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground">
          Daha yavaş bir açılma animasyonu — dikkat çekmek istediğiniz içerikler için.
        </div>
      </MtCollapse>
    </div>
  )
}

export { MtCollapseTransition }
