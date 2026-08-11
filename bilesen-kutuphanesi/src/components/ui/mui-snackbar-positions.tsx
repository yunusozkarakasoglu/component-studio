/**
 * MuiSnackbarPositions
 * @id 2078
 * @category Overlay
 * @subcategory MuiSnackbar
 * @source mui
 */
import { useState } from "react"
import { MuiSnackbar } from "@/components/ui/mui-snackbar"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

const POSITIONS = ["bottom-left", "bottom-center", "bottom-right", "top-left", "top-right"] as const

function MuiSnackbarPositions() {
  const [pos, setPos] = useState<(typeof POSITIONS)[number] | null>(null)
  return (
    <div className="space-y-3">
      <MuiStack direction="row" spacing={1} className="flex-wrap">
        {POSITIONS.map((p) => (
          <MuiButton key={p} variant="outlined" size="small" onClick={() => setPos(p)}>{p}</MuiButton>
        ))}
      </MuiStack>
      {pos && (
        <MuiSnackbar
          open={!!pos}
          message={`Bildirim: ${pos}`}
          onClose={() => setPos(null)}
          anchorOrigin={pos}
        />
      )}
    </div>
  )
}

export { MuiSnackbarPositions }
