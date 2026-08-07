/**
 * MtDialogUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1364
 * @category Overlay
 * @subcategory MtDialog
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDialog } from "@/components/ui/mt-dialog"

function MtDialogUsage() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="outline" onClick={() => setOpened(true)}>Show dialog</MtButton>
      <MtDialog opened={opened} onClose={() => setOpened(false)}>
        <p className="font-medium">Welcome back!</p>
        <p className="text-sm text-muted-foreground">You have 3 new notifications.</p>
        <MtButton size="compact-sm" onClick={() => setOpened(false)}>View</MtButton>
      </MtDialog>
    </>
  )
}

export { MtDialogUsage }
