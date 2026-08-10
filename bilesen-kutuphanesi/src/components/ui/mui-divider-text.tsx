/**
 * MuiDividerText
 * @id 1861
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"

function MuiDividerText() {
  return (
    <div className="space-y-4">
      <MuiDivider textAlign="left">Sol</MuiDivider>
      <MuiDivider textAlign="center">Orta</MuiDivider>
      <MuiDivider textAlign="right">Sağ</MuiDivider>
    </div>
  )
}

export { MuiDividerText }
