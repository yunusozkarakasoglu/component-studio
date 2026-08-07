/**
 * MtModalCentered
 * Ortalanmış modal (saf React, Mantine kaynaklı).
 * @id 1351
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalCentered() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="outline" onClick={() => setOpened(true)}>Open centered modal</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Centered" centered>
        <p className="text-sm text-muted-foreground">This modal is centered vertically.</p>
      </MtModal>
    </>
  )
}

export { MtModalCentered }
