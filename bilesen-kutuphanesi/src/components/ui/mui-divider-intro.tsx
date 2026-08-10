/**
 * MuiDividerIntro
 * @id 1893
 * @category Genel
 * @subcategory MuiDivider
 * @source mui
 */
import { MuiDivider } from "@/components/ui/mui-divider"
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiDividerIntro() {
  return (
    <div className="w-full max-w-md">
      <MuiTypography variant="h6" gutterBottom>Başlık</MuiTypography>
      <MuiTypography variant="body2" className="mb-3 text-gray-500">
        Ayraçlar içeriği bölümlere ayırır. Yatay ve dikey kullanım için uygundur.
      </MuiTypography>
      <MuiDivider />
    </div>
  )
}

export { MuiDividerIntro }
