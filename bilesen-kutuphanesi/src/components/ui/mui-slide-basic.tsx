/**
 * MuiSlideBasic
 * @id 1871
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { useState } from "react"
import { MuiSlide } from "@/components/ui/mui-slide"

function MuiSlideBasic() {
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
      <MuiSlide direction="up" in={open}>
        <div className="rounded border border-gray-300 bg-green-50 p-3 text-sm text-green-900">
          Yukarı kayarak beliren içerik — Slide animasyonu.
        </div>
      </MuiSlide>
    </div>
  )
}

export { MuiSlideBasic }
