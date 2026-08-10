/**
 * MuiDrawerBasic
 * @id 1985
 * @category Overlay
 * @subcategory MuiDrawer
 * @source mui
 */
import { useState } from "react"
import { MuiDrawer } from "@/components/ui/mui-drawer"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiDrawerBasic() {
  const [open, setOpen] = useState(false)
  const [anchor, setAnchor] = useState<"left" | "right" | "top" | "bottom">("right")
  return (
    <div className="space-y-3">
      <MuiStack direction="row" spacing={1} className="flex-wrap">
        {(["left", "right", "top", "bottom"] as const).map((a) => (
          <MuiButton key={a} variant="outlined" size="small" onClick={() => { setAnchor(a); setOpen(true) }}>
            {a} çekmece
          </MuiButton>
        ))}
      </MuiStack>
      <MuiDrawer open={open} onClose={() => setOpen(false)} anchor={anchor} title="Çekmece">
        <p>Bu, {anchor} kenarından kayan bir çekmece örneğidir. İçerik burada gösterilir.</p>
        <div className="mt-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded bg-gray-100 p-3 text-sm text-gray-600">Öğe {i}</div>
          ))}
        </div>
      </MuiDrawer>
    </div>
  )
}

export { MuiDrawerBasic }
