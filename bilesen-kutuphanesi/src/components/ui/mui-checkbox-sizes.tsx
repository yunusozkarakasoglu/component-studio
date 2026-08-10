/**
 * MuiCheckboxSizes
 * @id 1939
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiCheckboxSizes() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiCheckbox defaultChecked size="small">Küçük</MuiCheckbox>
      <MuiCheckbox defaultChecked size="medium">Orta</MuiCheckbox>
    </MuiStack>
  )
}

export { MuiCheckboxSizes }
