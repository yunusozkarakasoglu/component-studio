/**
 * MtModalSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1352
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalSize() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="light" onClick={() => setOpened(true)}>Large modal</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Large modal" size="lg">
        <p className="text-sm text-muted-foreground">This modal uses size="lg".</p>
      </MtModal>
    </>
  )
}

export { MtModalSize }
