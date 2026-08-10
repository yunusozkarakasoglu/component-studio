/**
 * MuiSelectMultiple
 * @id 1976
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { useState } from "react"
import { MuiSelect } from "@/components/ui/mui-select"

const NAMES = ["Oliver", "Vanessa", "Liam", "Ethan", "Sophia"]

function MuiSelectMultiple() {
  const [names, setNames] = useState<(string | number)[]>(["Oliver", "Liam"])
  return (
    <MuiSelect
      label="Katılımcılar"
      options={NAMES.map((n) => ({ value: n, label: n }))}
      value={names}
      onChange={(v) => setNames(Array.isArray(v) ? v : [v])}
      multiple
    />
  )
}

export { MuiSelectMultiple }
