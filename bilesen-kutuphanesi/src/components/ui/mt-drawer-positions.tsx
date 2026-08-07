/**
 * MtDrawerPositions
 * Konumlar (saf React, Mantine kaynaklı).
 * @id 1359
 * @category Overlay
 * @subcategory MtDrawer
 * @source mantine
 */
import { useState } from "react"
import { MtButton } from "@/components/ui/mt-button"
import { MtDrawer } from "@/components/ui/mt-drawer"

function MtDrawerPositions() {
  const [opened, setOpened] = useState(false)
  const [pos, setPos] = useState<"left" | "right" | "top" | "bottom">("right")

  const open = (p: "left" | "right" | "top" | "bottom") => { setPos(p); setOpened(true) }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <MtButton variant="outline" onClick={() => open("left")}>Left</MtButton>
        <MtButton variant="outline" onClick={() => open("right")}>Right</MtButton>
        <MtButton variant="outline" onClick={() => open("top")}>Top</MtButton>
        <MtButton variant="outline" onClick={() => open("bottom")}>Bottom</MtButton>
      </div>
      <MtDrawer opened={opened} onClose={() => setOpened(false)} title={`${pos} drawer`} position={pos}>
        <p className="text-sm text-muted-foreground">Drawer from the {pos} side.</p>
      </MtDrawer>
    </>
  )
}

export { MtDrawerPositions }
