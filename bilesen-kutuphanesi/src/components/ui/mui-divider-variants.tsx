/**
 * MuiDividerVariants
 * @id 1858
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"

function MuiDividerVariants() {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs text-gray-500">Tam genişlik</p>
        <MuiDivider />
      </div>
      <div>
        <p className="mb-2 text-xs text-gray-500">İçerikli (orta)</p>
        <MuiDivider>İçerik</MuiDivider>
      </div>
      <div>
        <p className="mb-2 text-xs text-gray-500">Inset</p>
        <MuiDivider variant="inset" />
      </div>
    </div>
  )
}

export { MuiDividerVariants }
