/**
 * MtModalUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1350
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalUsage() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton onClick={() => setOpened(true)}>Open modal</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        <p className="text-sm text-muted-foreground">This is a basic modal with a title and close button.</p>
      </MtModal>
    </>
  )
}

export { MtModalUsage }
