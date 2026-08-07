/**
 * MtDrawerUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1358
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"

function MtDrawerUsage() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton onClick={() => setOpened(true)}>Open drawer</MtButton>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} title="Drawer">
        <p className="text-sm text-muted-foreground">Drawer from the right side.</p>
      </MtDrawer>
    </>
  )
}

export { MtDrawerUsage }
