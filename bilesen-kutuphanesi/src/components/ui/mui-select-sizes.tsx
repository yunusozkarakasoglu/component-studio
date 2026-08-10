/**
 * MuiSelectSizes
 * @id 1979
 * @category Combobox
 * @subcategory MuiSelect
 * @source mui
 */
import { MuiSelect } from "@/components/ui/mui-select"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSelectSizes() {
  const opts = [
    { value: 1, label: "Bir" },
    { value: 2, label: "İki" },
    { value: 3, label: "Üç" },
  ]
  return (
    <MuiStack spacing={3} className="w-full max-w-sm">
      <MuiSelect label="Küçük" options={opts} size="small" defaultValue={1} />
      <MuiSelect label="Orta" options={opts} size="medium" defaultValue={2} />
      <MuiSelect label="Devre dışı" options={opts} disabled defaultValue={3} />
    </MuiStack>
  )
}

export { MuiSelectSizes }
