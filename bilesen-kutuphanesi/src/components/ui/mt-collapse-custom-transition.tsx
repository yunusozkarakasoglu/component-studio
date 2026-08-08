/**
 * MtCollapseCustomTransition
 * Özel zamanlama (saf React, Mantine kaynaklı).
 * @id 1585
 * @category Alert & Dialog
 * @subcategory MtCollapse
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtCollapse } from "@/components/ui/mt-collapse"

function MtCollapseCustomTransition() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <MtButton variant="default" onClick={() => setOpened((o) => !o)}>Gevşek açılış (ease-out)</MtButton>
      <MtCollapse in={opened} transitionDuration={400} transitionTimingFunction="cubic-bezier(0.16, 1, 0.3, 1)">
        <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-foreground">
          Özel easing fonksiyonu ile daha doğal bir hareket hissi.
        </div>
      </MtCollapse>
    </div>
  )
}

export { MtCollapseCustomTransition }
