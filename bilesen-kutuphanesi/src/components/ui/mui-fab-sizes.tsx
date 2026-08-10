/**
 * MuiFabSizes
 * @id 1915
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiFab
 * @source mui
 */
import { MuiFab } from "@/components/ui/mui-fab"
import { MuiStack } from "@/components/ui/mui-stack"
import { Plus } from "@/components/ui/icons"

function MuiFabSizes() {
  return (
    <MuiStack direction="row" spacing={3} className="items-center">
      <MuiFab size="small" aria-label="küçük"><Plus className="size-4" /></MuiFab>
      <MuiFab size="medium" aria-label="orta"><Plus className="size-6" /></MuiFab>
      <MuiFab size="large" aria-label="büyük"><Plus className="size-7" /></MuiFab>
    </MuiStack>
  )
}

export { MuiFabSizes }
