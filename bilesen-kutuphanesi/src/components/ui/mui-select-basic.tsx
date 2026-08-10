/**
 * MuiSelectBasic
 * @id 1975
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { useState } from "react"
import { MuiSelect } from "@/components/ui/mui-select"

function MuiSelectBasic() {
  const [age, setAge] = useState<string | number>("")
  return (
    <MuiSelect
      label="Yaş"
      options={[
        { value: 10, label: "On" },
        { value: 20, label: "Yirmi" },
        { value: 30, label: "Otuz" },
      ]}
      value={age}
      onChange={(v) => setAge(Array.isArray(v) ? v[0] : v)}
    />
  )
}

export { MuiSelectBasic }
