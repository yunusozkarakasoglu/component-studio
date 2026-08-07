/**
 * MtLoadingOverlayBlur
 * Bulanık katman (saf React, Mantine kaynaklı).
 * @id 1383
 * @category Overlay
 * @subcategory MtLoadingOverlay
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtLoadingOverlay } from "@/components/ui/mt-loading-overlay"

function MtLoadingOverlayBlur() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative w-full max-w-sm rounded-lg border border-border p-5">
      <MtLoadingOverlay visible={visible} overlayBlur={2} />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Blurred overlay demo</p>
        <p className="text-sm text-muted-foreground">Click the button to overlay with blur.</p>
        <MtButton variant="outline" onClick={() => setVisible((v) => !v)}>
          {visible ? "Hide" : "Show with blur"}
        </MtButton>
      </div>
    </div>
  )
}

export { MtLoadingOverlayBlur }
