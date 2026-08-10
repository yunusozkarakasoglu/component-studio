/**
 * MuiGrowBasic
 * @id 1888
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { useState } from "react"
import { MuiGrow } from "@/components/ui/mui-grow"

function MuiGrowBasic() {
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
      <MuiGrow in={open}>
        <div className="rounded border border-gray-300 bg-purple-50 p-3 text-sm text-purple-900">
          Ölçek büyüme animasyonuyla beliren içerik — Grow.
        </div>
      </MuiGrow>
    </div>
  )
}

export { MuiGrowBasic }
