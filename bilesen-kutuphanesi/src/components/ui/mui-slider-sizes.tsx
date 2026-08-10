/**
 * MuiSliderSizes
 * @id 1957
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSliderSizes() {
  return (
    <MuiStack spacing={4} className="w-full max-w-sm">
      <MuiSlider defaultValue={40} size="small" ariaLabel="Küçük" />
      <MuiSlider defaultValue={60} size="medium" ariaLabel="Orta" />
    </MuiStack>
  )
}

export { MuiSliderSizes }
