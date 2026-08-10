/**
 * MuiFabBasic
 * @id 1912
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiFab
 * @source mui
 */
import { MuiFab } from "@/components/ui/mui-fab"
import { MuiStack } from "@/components/ui/mui-stack"
import { Plus, Heart, Pencil, Navigation } from "@/components/ui/icons"

function MuiFabBasic() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap items-center">
      <MuiFab color="primary" aria-label="ekle"><Plus className="size-6" /></MuiFab>
      <MuiFab color="secondary" aria-label="düzenle"><Pencil className="size-6" /></MuiFab>
      <MuiFab variant="extended"><Navigation className="size-5" /> Navigate</MuiFab>
      <MuiFab disabled aria-label="beğen"><Heart className="size-6" /></MuiFab>
    </MuiStack>
  )
}

export { MuiFabBasic }
