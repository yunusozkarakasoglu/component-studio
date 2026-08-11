/**
 * MuiDialogFullScreen
 * @id 2053
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { useState } from "react"
import { MuiDialog } from "@/components/ui/mui-dialog"
import { MuiButton } from "@/components/ui/mui-button"

function MuiDialogFullScreen() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <MuiButton variant="outlined" onClick={() => setOpen(true)}>Tam Ekran Diyalog</MuiButton>
      <MuiDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Tam Ekran"
        fullScreen
        actions={<MuiButton variant="contained" onClick={() => setOpen(false)}>Kapat</MuiButton>}
      >
        <p className="mb-4">Bu diyalog tüm ekranı kaplar. Mobil formlar ve detay görünümleri için idealdir.</p>
        <div className="space-y-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="rounded bg-gray-100 p-3 text-sm text-gray-600">İçerik bölümü {i + 1}</div>
          ))}
        </div>
      </MuiDialog>
    </div>
  )
}

export { MuiDialogFullScreen }
