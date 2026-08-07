/**
 * MtModalConfirm
 * Onay modalı (saf React, Mantine kaynaklı).
 * @id 1356
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { AlertTriangle } from "@/components/ui/icons"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalConfirm() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtButton variant="default" onClick={() => setOpened(true)}>Delete account</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Are you sure?" size="sm">
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="size-4 text-amber-500" />
            This action cannot be undone. Your account will be permanently deleted.
          </p>
          <div className="flex justify-end gap-2">
            <MtButton variant="default" onClick={() => setOpened(false)}>Cancel</MtButton>
            <MtButton className="bg-red-600 hover:bg-red-700" onClick={() => setOpened(false)}>Delete</MtButton>
          </div>
        </div>
      </MtModal>
    </>
  )
}

export { MtModalConfirm }
