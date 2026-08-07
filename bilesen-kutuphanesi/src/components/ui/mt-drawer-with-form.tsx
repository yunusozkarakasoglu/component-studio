/**
 * MtDrawerWithForm
 * Formlu drawer (saf React, Mantine kaynaklı).
 * @id 1361
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"
import { MtTextInput } from "@/components/ui/mt-text-input"
import { MtTextarea } from "@/components/ui/mt-textarea"

function MtDrawerWithForm() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton onClick={() => setOpened(true)}>Add task</MtButton>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} title="New task">
        <div className="flex flex-col gap-4">
          <MtTextInput label="Title" placeholder="Task title" />
          <MtTextarea label="Description" placeholder="Details" />
          <MtButton onClick={() => setOpened(false)}>Create task</MtButton>
        </div>
      </MtDrawer>
    </>
  )
}

export { MtDrawerWithForm }
