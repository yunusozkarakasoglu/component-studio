/**
 * MuiTypographyVariants
 * @id 1857
 * @category Genel
 * @subcategory MuiTypography
 * @source mui
 */
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiTypographyVariants() {
  return (
    <div className="space-y-1">
      <MuiTypography variant="h1">h1. Başlık</MuiTypography>
      <MuiTypography variant="h2">h2. Başlık</MuiTypography>
      <MuiTypography variant="h3">h3. Başlık</MuiTypography>
      <MuiTypography variant="h4">h4. Başlık</MuiTypography>
      <MuiTypography variant="h5">h5. Başlık</MuiTypography>
      <MuiTypography variant="h6">h6. Başlık</MuiTypography>
      <MuiTypography variant="subtitle1">subtitle1. Alt başlık</MuiTypography>
      <MuiTypography variant="body1">body1. Gövde metni</MuiTypography>
      <MuiTypography variant="body2">body2. Daha küçük gövde metni</MuiTypography>
      <MuiTypography variant="caption">caption. Küçük açıklama</MuiTypography>
      <MuiTypography variant="overline">overline</MuiTypography>
    </div>
  )
}

export { MuiTypographyVariants }
