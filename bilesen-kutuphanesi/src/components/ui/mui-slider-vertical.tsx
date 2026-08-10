/**
 * MuiSliderVertical
 * @id 1958
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSliderVertical() {
  return (
    <MuiStack direction="row" spacing={6} className="h-40 items-center">
      <MuiSlider defaultValue={30} vertical ariaLabel="Dikey 1" />
      <MuiSlider defaultValue={60} vertical color="secondary" ariaLabel="Dikey 2" />
      <MuiSlider defaultValue={90} vertical color="success" ariaLabel="Dikey 3" />
    </MuiStack>
  )
}

export { MuiSliderVertical }
