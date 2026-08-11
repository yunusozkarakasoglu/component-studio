/**
 * MuiSliderTrackFalse
 * @id 2035
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"
import { MuiStack } from "@/components/ui/mui-stack"

function MuiSliderTrackFalse() {
  return (
    <MuiStack spacing={4} className="w-full max-w-sm">
      <MuiSlider defaultValue={40} min={0} max={100} ariaLabel="İz yok" className="!w-full" />
      <p className="text-xs text-gray-500">Dolu iz yerine yalnızca tutamak + noktalar.</p>
    </MuiStack>
  )
}

export { MuiSliderTrackFalse }
