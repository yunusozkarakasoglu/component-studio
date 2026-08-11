/**
 * MuiChipArray
 * @id 2065
 * @category Seçim
 * @subcategory MuiChip
 * @source mui
 */
import { useState } from "react"
import { MuiChip } from "@/components/ui/mui-chip"
import { MuiTextField } from "@/components/ui/mui-text-field"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiChipArray() {
  const [chips, setChips] = useState<string[]>(["React", "Vite"])
  const [input, setInput] = useState("")
  const add = () => {
    const v = input.trim()
    if (v && !chips.includes(v)) setChips((c) => [...c, v])
    setInput("")
  }
  return (
    <MuiStack spacing={2} className="w-full max-w-md">
      <MuiStack direction="row" spacing={1} className="flex-wrap">
        {chips.map((c) => (
          <MuiChip key={c} label={c} color="primary" onDelete={() => setChips((p) => p.filter((x) => x !== c))} />
        ))}
      </MuiStack>
      <MuiTextField
        label="Etiket ekle"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add() } }}
        placeholder="Yazıp Enter'a basın"
        size="small"
      />
    </MuiStack>
  )
}

export { MuiChipArray }
