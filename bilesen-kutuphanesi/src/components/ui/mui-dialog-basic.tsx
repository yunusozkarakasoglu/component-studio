/**
 * MuiDialogBasic
 * @id 1981
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { useState } from "react"
import { MuiDialog } from "@/components/ui/mui-dialog"
import { MuiButton } from "@/components/ui/mui-button"

function MuiDialogBasic() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="outlined" onClick={() => setOpen(true)}>Diyalogu Aç</MuiButton>
      <MuiDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Onay Gerekli"
        actions={
          <>
            <MuiButton variant="text" onClick={() => setOpen(false)}>İptal</MuiButton>
            <MuiButton variant="contained" onClick={() => setOpen(false)}>Onayla</MuiButton>
          </>
        }
      >
        Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz?
      </MuiDialog>
    </div>
  )
}

export { MuiDialogBasic }
