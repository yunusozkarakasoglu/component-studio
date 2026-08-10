/**
 * MuiChipClickable
 * @id 1966
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { useState } from "react"
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipClickable() {
  const [deleted, setDeleted] = useState<string[]>([])
  const chips = ["JavaScript", "TypeScript", "React", "Tailwind"]
  return (
    <MuiStack direction="row" spacing={1} className="flex-wrap">
      {chips.map((c) =>
        deleted.includes(c) ? null : (
          <MuiChip
            key={c}
            label={c}
            onClick={() => alert(`${c} seçildi`)}
            onDelete={() => setDeleted((d) => [...d, c])}
          />
        )
      )}
    </MuiStack>
  )
}

export { MuiChipClickable }
