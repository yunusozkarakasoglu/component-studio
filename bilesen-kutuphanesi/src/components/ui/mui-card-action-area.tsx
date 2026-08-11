/**
 * MuiCardActionArea
 * @id 2052
 * @category Veri Gösterimi
 * @subcategory MuiCard
 * @source mui
 */
import { MuiCard } from "@/components/ui/mui-card"
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiCardActionArea() {
  return (
    <button type="button" className="block cursor-pointer rounded-lg text-left transition-transform hover:scale-[1.02]" onClick={() => alert("Karta tıklandı")}>
      <MuiCard
        title="Tıklanabilir Kart"
        subheader="Action Area"
        media={<div className="h-28 w-full bg-gradient-to-br from-emerald-400 to-teal-600" role="img" aria-label="Yeşil" />}
        className="max-w-sm"
      >
        <MuiTypography variant="body2" className="text-gray-600">
          Kartın tamamı tıklanabilir — ActionArea davranışı.
        </MuiTypography>
      </MuiCard>
    </button>
  )
}

export { MuiCardActionArea }
