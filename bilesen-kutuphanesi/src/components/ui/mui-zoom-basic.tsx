/**
 * MuiZoomBasic
 * @id 1889
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { useState } from "react"
import { MuiZoom } from "@/components/ui/mui-zoom"

function MuiZoomBasic() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full max-w-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
      >
        {open ? "Gizle" : "Göster"}
      </button>
      <MuiZoom in={open}>
        <div className="rounded border border-gray-300 bg-amber-50 p-3 text-sm text-amber-900">
          Belirgin ölçekle beliren içerik — Zoom animasyonu.
        </div>
      </MuiZoom>
    </div>
  )
}

export { MuiZoomBasic }
