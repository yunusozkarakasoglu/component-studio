/**
 * MuiAlertVariants
 * @id 1919
 * @category Alert & Dialog
 * @subcategory MuiAlert
 * @source mui
 */
import { MuiAlert } from "@/components/ui/mui-alert"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiAlertVariants() {
  return (
    <MuiStack spacing={2} className="w-full">
      <MuiAlert severity="success" variant="standard">standard varyant</MuiAlert>
      <MuiAlert severity="success" variant="filled">filled varyant</MuiAlert>
      <MuiAlert severity="success" variant="outlined">outlined varyant</MuiAlert>
    </MuiStack>
  )
}

export { MuiAlertVariants }
