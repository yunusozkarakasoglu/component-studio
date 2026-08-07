/**
 * MtDrawerSize
 * Boyutlar (saf React, Mantine kaynaklı).
 * @id 1360
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"

function MtDrawerSize() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="light" onClick={() => setOpened(true)}>Large drawer</MtButton>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} title="Large drawer" size="lg">
        <p className="text-sm text-muted-foreground">This drawer uses size="lg".</p>
      </MtDrawer>
    </>
  )
}

export { MtDrawerSize }
