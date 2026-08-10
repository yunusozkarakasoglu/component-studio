/**
 * MuiDialogForm
 * @id 1982
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { useState } from "react"
import { MuiDialog } from "@/components/ui/mui-dialog"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiDialogForm() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="outlined" onClick={() => setOpen(true)}>Form Diyaloğu</MuiButton>
      <MuiDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Abonelik"
        actions={
          <>
            <MuiButton variant="text" onClick={() => setOpen(false)}>Vazgeç</MuiButton>
            <MuiButton variant="contained" onClick={() => setOpen(false)}>Abone Ol</MuiButton>
          </>
        }
      >
        <MuiStack spacing={3}>
          <MuiTextField label="E-posta" type="email" placeholder="ornek@site.com" fullWidth />
          <MuiTextField label="Ad Soyad" placeholder="Adınız" fullWidth />
        </MuiStack>
      </MuiDialog>
    </div>
  )
}

export { MuiDialogForm }
