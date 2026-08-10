/**
 * MuiCheckboxColors
 * @id 1938
 * @category Seçim
 * @subcategory MuiCheckbox
 * @source mui
 */
import { MuiCheckbox } from "@/components/ui/mui-checkbox"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiCheckboxColors() {
  return (
    <MuiStack spacing={2}>
      <MuiCheckbox defaultChecked color="primary">Primary</MuiCheckbox>
      <MuiCheckbox defaultChecked color="secondary">Secondary</MuiCheckbox>
      <MuiCheckbox defaultChecked color="success">Success</MuiCheckbox>
      <MuiCheckbox defaultChecked color="error">Error</MuiCheckbox>
      <MuiCheckbox defaultChecked color="warning">Warning</MuiCheckbox>
      <MuiCheckbox defaultChecked color="info">Info</MuiCheckbox>
    </MuiStack>
  )
}

export { MuiCheckboxColors }
