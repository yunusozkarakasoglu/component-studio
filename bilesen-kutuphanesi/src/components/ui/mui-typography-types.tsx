/**
 * MuiTypographyTypes
 * @id 1876
 * @category Genel
 * @subcategory MuiTypography
 * @source mui
 */
import { MuiTypography } from "@/components/ui/mui-typography"

function MuiTypographyTypes() {
  return (
    <div className="w-full max-w-md space-y-1">
      <MuiTypography variant="h1" gutterBottom>h1. Heading</MuiTypography>
      <MuiTypography variant="h2" gutterBottom>h2. Heading</MuiTypography>
      <MuiTypography variant="h3" gutterBottom>h3. Heading</MuiTypography>
      <MuiTypography variant="h4" gutterBottom>h4. Heading</MuiTypography>
      <MuiTypography variant="h5" gutterBottom>h5. Heading</MuiTypography>
      <MuiTypography variant="h6" gutterBottom>h6. Heading</MuiTypography>
      <MuiTypography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </MuiTypography>
      <MuiTypography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </MuiTypography>
      <MuiTypography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit.
      </MuiTypography>
      <MuiTypography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit.
      </MuiTypography>
      <MuiTypography variant="button" gutterBottom>button text</MuiTypography>
      <MuiTypography variant="caption" gutterBottom>caption text</MuiTypography>
      <MuiTypography variant="overline" gutterBottom>overline text</MuiTypography>
    </div>
  )
}

export { MuiTypographyTypes }
