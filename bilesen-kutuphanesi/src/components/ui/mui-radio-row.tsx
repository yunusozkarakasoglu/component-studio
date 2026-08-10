/**
 * MuiRadioRow
 * @id 1949
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { MuiRadioGroup } from "@/components/ui/mui-radio-group"

function MuiRadioRow() {
  return (
    <MuiRadioGroup
      label="Hizalama"
      options={[
        { value: "sol", label: "Sol" },
        { value: "orta", label: "Orta" },
        { value: "sag", label: "Sağ" },
      ]}
      defaultValue="orta"
      row
    />
  )
}

export { MuiRadioRow }
