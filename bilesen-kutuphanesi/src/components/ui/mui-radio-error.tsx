/**
 * MuiRadioError
 * @id 1951
 * @category Seçim
 * @subcategory MuiRadio
 * @source mui
 */
import { MuiRadioGroup } from "@/components/ui/mui-radio-group"

function MuiRadioError() {
  return (
    <div className="rounded-md border border-red-300 bg-red-50 p-3">
      <p className="mb-2 text-sm font-medium text-red-700">Lütfen bir seçenek işaretleyin</p>
      <MuiRadioGroup
        options={[
          { value: "a", label: "Seçenek A" },
          { value: "b", label: "Seçenek B" },
        ]}
      />
    </div>
  )
}

export { MuiRadioError }
