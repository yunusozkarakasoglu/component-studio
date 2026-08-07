/**
 * MtModalControlled
 * Kontrollü modal — içerik seçimi (saf React, Mantine kaynaklı).
 * @id 1357
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalControlled() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="light" onClick={() => setOpened(true)}>Open</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Settings" size="sm">
        <p className="text-sm text-muted-foreground">Modal content with controlled open state.</p>
      </MtModal>
    </>
  )
}

export { MtModalControlled }
