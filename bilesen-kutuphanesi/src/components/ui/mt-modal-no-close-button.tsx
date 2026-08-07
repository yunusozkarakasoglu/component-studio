/**
 * MtModalNoCloseButton
 * Kapatma butonsuz modal (saf React, Mantine kaynaklı).
 * @id 1353
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalNoCloseButton() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="default" onClick={() => setOpened(true)}>No close button</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-3xl">✅</span>
          <p className="font-medium">Action completed</p>
          <MtButton onClick={() => setOpened(false)}>Done</MtButton>
        </div>
      </MtModal>
    </>
  )
}

export { MtModalNoCloseButton }
