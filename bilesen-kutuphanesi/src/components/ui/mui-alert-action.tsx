/**
 * MuiAlertAction
 * @id 1920
 * @category Alert & Dialog
 * @subcategory MuiAlert
 * @source mui
 */
import { useState } from "react"
import { MuiAlert } from "@/components/ui/mui-alert"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiAlertAction() {
  const [visible, setVisible] = useState(true)
  if (!visible) {
    return (
      <MuiButton variant="outlined" onClick={() => setVisible(true)}>Tekrar Göster</MuiButton>
    )
  }
  return (
    <MuiStack spacing={2} className="w-full">
      <MuiAlert
        severity="info"
        onClose={() => setVisible(false)}
        action={
          <MuiButton variant="text" size="small" color="info" onClick={() => setVisible(false)}>
            GERİ AL
          </MuiButton>
        }
      >
        Kapatılabilir uyarı — GERİ AL aksiyonu ile.
      </MuiAlert>
    </MuiStack>
  )
}

export { MuiAlertAction }
