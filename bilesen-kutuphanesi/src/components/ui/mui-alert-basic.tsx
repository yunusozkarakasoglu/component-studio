/**
 * MuiAlertBasic
 * @id 1918
 * @category Alert & Dialog
 * @subcategory MuiAlert
 * @source mui
 */
import { MuiAlert } from "@/components/ui/mui-alert"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiAlertBasic() {
  return (
    <MuiStack spacing={2} className="w-full">
      <MuiAlert severity="success">Bu bir başarı uyarısı.</MuiAlert>
      <MuiAlert severity="info">Bu bir bilgi uyarısı.</MuiAlert>
      <MuiAlert severity="warning">Bu bir uyarı mesajı.</MuiAlert>
      <MuiAlert severity="error">Bu bir hata uyarısı.</MuiAlert>
    </MuiStack>
  )
}

export { MuiAlertBasic }
