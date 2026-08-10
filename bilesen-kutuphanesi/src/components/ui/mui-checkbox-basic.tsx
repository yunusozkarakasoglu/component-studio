/**
 * MuiCheckboxBasic
 * @id 1937
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiCheckboxBasic() {
  return (
    <MuiStack spacing={2}>
      <MuiCheckbox defaultChecked>Varsayılan seçili</MuiCheckbox>
      <MuiCheckbox>Seçili değil</MuiCheckbox>
      <MuiCheckbox disabled>Devre dışı</MuiCheckbox>
      <MuiCheckbox defaultChecked disabled>Devre dışı + seçili</MuiCheckbox>
    </MuiStack>
  )
}

export { MuiCheckboxBasic }
