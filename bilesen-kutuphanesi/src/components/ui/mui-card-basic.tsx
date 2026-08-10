/**
 * MuiCardBasic
 * @id 2006
 * @category Veri Gösterimi
 * @subcategory MuiCard
 * @source mui
 */
import { MuiCard } from "@/components/ui/mui-card"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiCardBasic() {
  return (
    <MuiCard
      title="Günün Kelimesi"
      subheader="sıfat"
      actions={
        <>
          <MuiButton size="small" color="primary">Daha Fazla</MuiButton>
          <MuiButton size="small" color="primary">Öğren</MuiButton>
        </>
      }
      className="max-w-sm"
    >
      <MuiTypography variant="h5">be·nev·o·lent</MuiTypography>
      <MuiTypography variant="body2" className="mt-2 text-gray-600">
        İyi niyetli ve nazik anlamına gelir. "O gülümseyen bir tavırla yardım etti."
      </MuiTypography>
    </MuiCard>
  )
}

export { MuiCardBasic }
