/**
 * MtDrawerNoHeader
 * Başlıksız drawer (saf React, Mantine kaynaklı).
 * @id 1362
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"

function MtDrawerNoHeader() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="default" onClick={() => setOpened(true)}>Drawer without header</MtButton>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} withCloseButton={false} position="bottom" size="sm">
        <div className="flex flex-col items-center gap-3 py-4">
          <span className="text-2xl">🎉</span>
          <p className="font-medium">Action completed successfully</p>
          <MtButton onClick={() => setOpened(false)}>Close</MtButton>
        </div>
      </MtDrawer>
    </>
  )
}

export { MtDrawerNoHeader }
