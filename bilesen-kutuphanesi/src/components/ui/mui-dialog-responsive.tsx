/**
 * MuiDialogResponsive
 * @id 2064
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { useState } from "react"
import { MuiDialog } from "@/components/ui/mui-dialog"
import { MuiButton } from "@/components/ui/mui-button"

function MuiDialogResponsive() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="outlined" onClick={() => setOpen(true)}>Duyarlı Diyalog</MuiButton>
      <MuiDialog open={open} onClose={() => setOpen(false)} title="Duyarlı" maxWidth="md" fullWidth
        actions={<MuiButton variant="contained" onClick={() => setOpen(false)}>Tamam</MuiButton>}>
        <p>fullWidth + maxWidth="md" — içerik genişliğe göre esner.</p>
      </MuiDialog>
    </div>
  )
}

export { MuiDialogResponsive }
