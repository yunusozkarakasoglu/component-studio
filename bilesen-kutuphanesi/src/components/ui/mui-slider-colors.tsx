/**
 * MuiSliderColors
 * @id 1959
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSliderColors() {
  return (
    <MuiStack spacing={4} className="w-full max-w-sm">
      <MuiSlider defaultValue={20} color="primary" ariaLabel="Primary" />
      <MuiSlider defaultValue={40} color="secondary" ariaLabel="Secondary" />
      <MuiSlider defaultValue={60} color="success" ariaLabel="Success" />
      <MuiSlider defaultValue={80} color="error" ariaLabel="Error" />
    </MuiStack>
  )
}

export { MuiSliderColors }
