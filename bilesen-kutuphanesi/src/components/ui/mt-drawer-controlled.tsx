/**
 * MtDrawerControlled
 * Kontrollü drawer (saf React, Mantine kaynaklı).
 * @id 1363
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"

function MtDrawerControlled() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="light" onClick={() => setOpened(true)}>Open</MtButton>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} title="Controlled drawer" position="left">
        <p className="text-sm text-muted-foreground">Controlled open state drawer.</p>
      </MtDrawer>
    </>
  )
}

export { MtDrawerControlled }
