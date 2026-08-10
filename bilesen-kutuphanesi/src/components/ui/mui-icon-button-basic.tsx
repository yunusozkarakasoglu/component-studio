/**
 * MuiIconButtonBasic
 * @id 1901
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { MuiStack } from "@/components/ui/mui-stack"
import { Delete, AlarmClock, ShoppingCart } from "@/components/ui/icons"

function MuiIconButtonBasic() {
  return (
    <MuiStack direction="row" spacing={1}>
      <MuiIconButton aria-label="delete"><Delete className="size-5" /></MuiIconButton>
      <MuiIconButton aria-label="delete" disabled color="primary"><Delete className="size-5" /></MuiIconButton>
      <MuiIconButton color="secondary" aria-label="alarm ekle"><AlarmClock className="size-5" /></MuiIconButton>
      <MuiIconButton color="primary" aria-label="sepete ekle"><ShoppingCart className="size-5" /></MuiIconButton>
    </MuiStack>
  )
}

export { MuiIconButtonBasic }
