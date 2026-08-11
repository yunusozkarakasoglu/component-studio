/**
 * MuiCheckboxGroup
 * @id 2038
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { useState } from "react"
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiStack } from "@/components/ui/mui-stack"

const TYPES = ["Fotoğraf", "Video", "Belge", "Ses"]

function MuiCheckboxGroup() {
  const [checked, setChecked] = useState<string[]>(["Fotoğraf", "Video"])
  const toggle = (v: string) =>
    setChecked((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]))
  return (
    <MuiStack spacing={1.5}>
      <p className="text-sm font-medium text-gray-800">Dosya türleri</p>
      {TYPES.map((t) => (
        <MuiCheckbox key={t} checked={checked.includes(t)} onChange={() => toggle(t)}>
          {t}
        </MuiCheckbox>
      ))}
      <p className="text-xs text-gray-500">Seçili: {checked.join(", ") || "hiçbiri"}</p>
    </MuiStack>
  )
}

export { MuiCheckboxGroup }
