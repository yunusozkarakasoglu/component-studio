/**
 * MuiIconButtonSizes
 * @id 2073
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButton
 * @source mui
 */
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { MuiStack } from "@/components/ui/mui-stack"
import { Heart } from "@/components/ui/icons"

function MuiIconButtonSizes() {
  return (
    <MuiStack direction="row" spacing={2} className="items-center">
      <MuiIconButton size="small" aria-label="küçük"><Heart className="size-4" /></MuiIconButton>
      <MuiIconButton size="medium" aria-label="orta"><Heart className="size-5" /></MuiIconButton>
      <MuiIconButton size="large" aria-label="büyük"><Heart className="size-6" /></MuiIconButton>
      <MuiIconButton size="medium" color="error" aria-label="hata"><Heart className="size-5" /></MuiIconButton>
    </MuiStack>
  )
}

export { MuiIconButtonSizes }
