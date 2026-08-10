/**
 * MuiSnackbarBasic
 * @id 1987
 * @category Overlay
 * @subcategory MuiSnackbar
 * @source mui
 */
import { useState } from "react"
import { MuiSnackbar } from "@/components/ui/mui-snackbar"
import { MuiButton } from "@/components/ui/mui-button"

function MuiSnackbarBasic() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="contained" onClick={() => setOpen(true)}>Bildirim Göster</MuiButton>
      <MuiSnackbar
        open={open}
        message="İşlem başarıyla kaydedildi"
        onClose={() => setOpen(false)}
        action={<button type="button" onClick={() => setOpen(false)} className="cursor-pointer font-medium text-blue-300 hover:text-blue-200">KAPAT</button>}
      />
    </div>
  )
}

export { MuiSnackbarBasic }
