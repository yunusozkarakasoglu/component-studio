/**
 * MuiChipDeletable
 * @id 2042
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { useState } from "react"
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipDeletable() {
  const [chips, setChips] = useState(["React", "TypeScript", "Tailwind"])
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      {chips.map((c) => (
        <MuiChip key={c} label={c} variant="outlined" onDelete={() => setChips((prev) => prev.filter((x) => x !== c))} />
      ))}
      {chips.length === 0 && <span className="text-xs text-gray-400">Tüm çipler silindi</span>}
    </MuiStack>
  )
}

export { MuiChipDeletable }
