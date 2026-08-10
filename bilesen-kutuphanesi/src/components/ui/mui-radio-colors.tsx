/**
 * MuiRadioColors
 * @id 1950
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { MuiRadioGroup } from "@/components/ui/mui-radio-group"

function MuiRadioColors() {
  return (
    <div className="space-y-3">
      <MuiRadioGroup label="Primary" options={[{ value: "1", label: "Seçenek" }]} defaultValue="1" />
      <MuiRadioGroup label="Secondary" options={[{ value: "1", label: "Seçenek" }]} defaultValue="1" />
      <MuiRadioGroup label="Success" options={[{ value: "1", label: "Seçenek" }]} defaultValue="1" />
      <MuiRadioGroup label="Error" options={[{ value: "1", label: "Seçenek" }]} defaultValue="1" />
    </div>
  )
}

export { MuiRadioColors }
