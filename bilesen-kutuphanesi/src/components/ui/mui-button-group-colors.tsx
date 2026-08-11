/**
 * MuiButtonGroupColors
 * @id 2068
 * @category Butonlar & Aksiyonlar
 * @subcategory MuiButtonGroup
 * @source mui
 */
import { MuiButtonGroup } from "@/components/ui/mui-button-group"
import { MuiButton } from "@/components/ui/mui-button"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiButtonGroupColors() {
  return (
    <MuiStack direction="row" spacing={2} className="flex-wrap">
      <MuiButtonGroup variant="contained" color="primary" ariaLabel="birincil">
        <MuiButton>One</MuiButton>
        <MuiButton>Two</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="contained" color="secondary" ariaLabel="ikincil">
        <MuiButton>One</MuiButton>
        <MuiButton>Two</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="contained" color="success" ariaLabel="başarı">
        <MuiButton>One</MuiButton>
        <MuiButton>Two</MuiButton>
      </MuiButtonGroup>
      <MuiButtonGroup variant="contained" color="error" ariaLabel="hata">
        <MuiButton>One</MuiButton>
        <MuiButton>Two</MuiButton>
      </MuiButtonGroup>
    </MuiStack>
  )
}

export { MuiButtonGroupColors }
