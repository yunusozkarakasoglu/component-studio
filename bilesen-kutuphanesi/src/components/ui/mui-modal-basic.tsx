/**
 * MuiModalBasic
 * @id 2030
 * @category Overlay
 * @subcategory MuiModal
 * @source mui
 */
import { useState } from "react"
import { MuiModal } from "@/components/ui/mui-modal"
import { MuiButton } from "@/components/ui/mui-button"

function MuiModalBasic() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="contained" onClick={() => setOpen(true)}>Modal Aç</MuiButton>
      <MuiModal open={open} onClose={() => setOpen(false)} title="Bilgi">
        <p>Bu, arka planı karartılmış bir modal örneğidir. İçerik merkezde gösterilir.</p>
        <div className="mt-4 flex justify-end">
          <MuiButton variant="contained" onClick={() => setOpen(false)}>Kapat</MuiButton>
        </div>
      </MuiModal>
    </div>
  )
}

export { MuiModalBasic }
