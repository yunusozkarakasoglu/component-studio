/**
 * MuiFadeBasic
 * @id 1870
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { useState } from "react"
import { MuiFade } from "@/components/ui/mui-fade"

function MuiFadeBasic() {
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
      <MuiFade in={open}>
        <div className="rounded border border-gray-300 bg-blue-50 p-3 text-sm text-blue-900">
          Opacity geçişiyle beliren içerik — Fade animasyonu.
        </div>
      </MuiFade>
    </div>
  )
}

export { MuiFadeBasic }
