/**
 * MuiDialogMaxWidth
 * @id 1983
 * @category Overlay
 * @subcategory MuiDialog
 * @source mui
 */
import { useState } from "react"
import { MuiDialog } from "@/components/ui/mui-dialog"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiSelect } from "@/components/ui/mui-select"

function MuiDialogMaxWidth() {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState<string | number>("sm")
  return (
    <div className="space-y-3">
      <MuiSelect
        label="Genişlik"
        options={[
          { value: "xs", label: "xs" },
          { value: "sm", label: "sm" },
          { value: "md", label: "md" },
          { value: "lg", label: "lg" },
          { value: "xl", label: "xl" },
        ]}
        value={width}
        onChange={(v) => setWidth(Array.isArray(v) ? v[0] : v)}
        size="small"
        className="!max-w-40"
      />
      <div>
        <MuiButton variant="outlined" onClick={() => setOpen(true)}>Diyalogu Aç</MuiButton>
      </div>
      <MuiDialog open={open} onClose={() => setOpen(false)} title={`maxWidth: ${width}`} maxWidth={width as "sm"} fullWidth>
        Genişlik seçilen değere göre değişir. İçerik bu alanda gösterilir.
      </MuiDialog>
    </div>
  )
}

export { MuiDialogMaxWidth }
