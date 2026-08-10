/**
 * MuiCardMedia
 * @id 2007
 * @category Veri Gösterimi
 * @subcategory MuiCard
 * @source mui
 */
import { MuiCard } from "@/components/ui/mui-card"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiCardMedia() {
  return (
    <MuiCard
      title="Dağ Manzarası"
      subheader="Fotoğraf: Örnek"
      media={<div className="h-40 w-full bg-gradient-to-br from-sky-400 to-indigo-600" role="img" aria-label="Manzara" />}
      actions={<MuiButton size="small" color="primary">Paylaş</MuiButton>}
      className="max-w-sm"
    >
      <MuiTypography variant="body2" className="text-gray-600">
        Bu kart, üstte medya alanı ve altta aksiyon butonu olan bir örnektir.
      </MuiTypography>
    </MuiCard>
  )
}

export { MuiCardMedia }
