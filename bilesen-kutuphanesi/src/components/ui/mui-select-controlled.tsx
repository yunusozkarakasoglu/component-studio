/**
 * MuiSelectControlled
 * @id 2060
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { useState } from "react"
import { MuiSelect } from "@/components/ui/mui-select"
import { MuiButton } from "@/components/ui/mui-button"

function MuiSelectControlled() {
  const [value, setValue] = useState<string | number>("orta")
  return (
    <div className="flex items-end gap-3">
      <MuiSelect
        label="Kontrollü seçim"
        options={[
          { value: "kucuk", label: "Küçük" },
          { value: "orta", label: "Orta" },
          { value: "buyuk", label: "Büyük" },
        ]}
        value={value}
        onChange={(v) => setValue(Array.isArray(v) ? v[0] : v)}
      />
      <MuiButton variant="outlined" size="small" onClick={() => setValue("buyuk")}>Büyük Seç</MuiButton>
    </div>
  )
}

export { MuiSelectControlled }
