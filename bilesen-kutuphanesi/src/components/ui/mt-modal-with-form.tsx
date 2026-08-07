/**
 * MtModalWithForm
 * Formlu modal (saf React, Mantine kaynaklı).
 * @id 1354
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtModalWithForm() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton onClick={() => setOpened(true)}>Edit profile</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Edit profile">
        <div className="flex flex-col gap-4">
          <MtTextInput label="Name" defaultValue="John Doe" />
          <MtTextInput label="Email" defaultValue="john@example.com" />
          <div className="flex justify-end gap-2">
            <MtButton variant="default" onClick={() => setOpened(false)}>Cancel</MtButton>
            <MtButton onClick={() => setOpened(false)}>Save</MtButton>
          </div>
        </div>
      </MtModal>
    </>
  )
}

export { MtModalWithForm }
