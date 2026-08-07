/**
 * MtLoadingOverlayUsage
 * Temel kullanım (saf React, Mantine kaynaklı).
 * @id 1382
 * @category Overlay
 * @subcategory MtLoadingOverlay
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtLoadingOverlay } from "@/components/ui/mt-loading-overlay"
import { MtTextInput } from "@/components/ui/mt-text-input"

function MtLoadingOverlayUsage() {
  const [visible, setVisible] = useState(true)

  return (
    <div className="relative w-full max-w-sm rounded-lg border border-border p-5">
      <MtLoadingOverlay visible={visible} />
      <div className="flex flex-col gap-3">
        <MtTextInput label="Name" defaultValue="Loading form" />
        <MtTextInput label="Email" defaultValue="loading@example.com" />
        <MtButton variant="outline" onClick={() => setVisible((v) => !v)}>
          {visible ? "Hide overlay" : "Show overlay"}
        </MtButton>
      </div>
    </div>
  )
}

export { MtLoadingOverlayUsage }
