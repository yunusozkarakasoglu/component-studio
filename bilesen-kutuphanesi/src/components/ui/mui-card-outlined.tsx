/**
 * MuiCardOutlined
 * @id 2008
 * @category Veri Gösterimi
 * @subcategory MuiCard
 * @source mui
 */
import { MuiCard } from "@/components/ui/mui-card"
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiCardOutlined() {
  return (
    <MuiCard
      variant="outlined"
      title="Kenarlıklı Kart"
      subheader="outlined varyant"
      className="max-w-sm"
    >
      <MuiTypography variant="body2" className="text-gray-600">
        Gölge yerine ince kenarlık kullanan kart varyantı. Yüzey üzerinde daha sade görünür.
      </MuiTypography>
    </MuiCard>
  )
}

export { MuiCardOutlined }
