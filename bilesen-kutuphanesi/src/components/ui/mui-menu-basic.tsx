/**
 * MuiMenuBasic
 * @id 1992
 * @category Navigasyon
 * @subcategory MuiMenu
 * @source mui
 */
import { MuiMenu } from "@/components/ui/mui-menu"
import { MuiButton } from "@/components/ui/mui-button"
import { Plus, Copy, Save, Trash2, Share2 } from "@/components/ui/icons"

function MuiMenuBasic() {
  return (
    <MuiMenu
      trigger={<MuiButton variant="contained">İşlemler ▾</MuiButton>}
      items={[
        { label: "Yeni", icon: <Plus className="size-4" />, onClick: () => alert("Yeni") },
        { label: "Kopyala", icon: <Copy className="size-4" />, onClick: () => alert("Kopyalandı") },
        { label: "Kaydet", icon: <Save className="size-4" />, onClick: () => alert("Kaydedildi") },
        { label: "Paylaş", icon: <Share2 className="size-4" />, onClick: () => alert("Paylaşıldı") },
        { label: "Sil", icon: <Trash2 className="size-4" />, disabled: true },
      ]}
    />
  )
}

export { MuiMenuBasic }
