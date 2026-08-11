/**
 * MuiSliderTrackInverted
 * @id 2041
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderTrackInverted() {
  return (
    <div className="w-full max-w-sm">
      <MuiSlider defaultValue={30} min={0} max={100} ariaLabel="Ters iz" />
      <p className="mt-2 text-xs text-gray-500">Tutamak öncesi alan dolu, sonrası boş (MUI track=inverted mantığı).</p>
    </div>
  )
}

export { MuiSliderTrackInverted }
