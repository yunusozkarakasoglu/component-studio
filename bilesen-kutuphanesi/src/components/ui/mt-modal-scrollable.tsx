/**
 * MtModalScrollable
 * Kaydırılabilir modal (saf React, Mantine kaynaklı).
 * @id 1355
 * @category Overlay
 * @subcategory MtModal
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtModal } from "@/components/ui/mt-modal"

function MtModalScrollable() {
  const [opened, setOpened] = useState(false)
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  return (
    <>
      <MtButton variant="outline" onClick={() => setOpened(true)}>Scrollable content</MtButton>
      <MtModal opened={opened} onClose={() => setOpened(false)} title="Long content">
        <div className="max-h-72 overflow-y-auto">
          {Array.from({ length: 12 }).map((_, i) => (
            <p key={i} className="mb-3 text-sm text-muted-foreground">{lorem}</p>
          ))}
        </div>
      </MtModal>
    </>
  )
}

export { MtModalScrollable }
