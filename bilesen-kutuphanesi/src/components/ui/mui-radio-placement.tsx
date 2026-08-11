/**
 * MuiRadioPlacement
 * @id 2058
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { MuiRadioGroup } from "@/components/ui/mui-radio-group"

function MuiRadioPlacement() {
  return (
    <div className="space-y-4">
      <MuiRadioGroup
        label="Yatay (row)"
        row
        options={[
          { value: "a", label: "Bir" },
          { value: "b", label: "İki" },
          { value: "c", label: "Üç" },
        ]}
        defaultValue="a"
      />
      <MuiRadioGroup
        label="Dikey"
        options={[
          { value: "x", label: "X" },
          { value: "y", label: "Y" },
        ]}
        defaultValue="x"
      />
    </div>
  )
}

export { MuiRadioPlacement }
