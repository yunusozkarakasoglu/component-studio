/**
 * MuiCollapseBasic
 * @id 1869
 * @category Genel
 * @subcategory MuiTransitions
 * @source mui
 */
import { useState } from "react"
import { MuiCollapse } from "@/components/ui/mui-collapse"

function MuiCollapseBasic() {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full max-w-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
      >
        {open ? "Daralt" : "Genişlet"}
      </button>
      <MuiCollapse in={open}>
        <div className="rounded border border-gray-300 p-3 text-sm text-gray-700">
          Bu içerik yükseklik animasyonuyla açılır/kapanır. MUI Collapse davranışı — max-height
          geçişi ile pürüzsüz daralma/genişleme sağlanır.
        </div>
      </MuiCollapse>
    </div>
  )
}

export { MuiCollapseBasic }
