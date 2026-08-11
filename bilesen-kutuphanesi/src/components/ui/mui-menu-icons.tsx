/**
 * MuiMenuIcons
 * @id 2037
 * @category Navigasyon
 * @subcategory MuiMenu
 * @source mui
 */
import { MuiMenu } from "@/components/ui/mui-menu"
import { MuiIconButton } from "@/components/ui/mui-icon-button"
import { MoreVertical, Copy, Edit, Delete, Download } from "@/components/ui/icons"

function MuiMenuIcons() {
  return (
    <MuiMenu
      trigger={<MuiIconButton aria-label="Menü"><MoreVertical className="size-5" /></MuiIconButton>}
      items={[
        { label: "Düzenle", icon: <Edit className="size-4" /> },
        { label: "Kopyala", icon: <Copy className="size-4" /> },
        { label: "İndir", icon: <Download className="size-4" /> },
        { label: "Sil", icon: <Delete className="size-4" /> },
      ]}
    />
  )
}

export { MuiMenuIcons }
