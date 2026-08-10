/**
 * MuiButtonIconLabel
 * @id 1900
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"
import { Send, ShoppingCart, Delete } from "@/components/ui/icons"

function MuiButtonIconLabel() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButton variant="contained" startIcon={<Send className="size-4" />}>Send</MuiButton>
      <MuiButton variant="contained" color="success" startIcon={<ShoppingCart className="size-4" />}>Sepete Ekle</MuiButton>
      <MuiButton variant="outlined" color="error" startIcon={<Delete className="size-4" />}>Sil</MuiButton>
    </MuiStack>
  )
}

export { MuiButtonIconLabel }
