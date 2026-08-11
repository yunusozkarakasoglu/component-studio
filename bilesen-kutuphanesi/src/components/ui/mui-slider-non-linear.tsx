/**
 * MuiSliderNonLinear
 * @id 2039
 * @category Seçim
 * @subcategory MuiSlider
 * @source mui
 */
import { MuiSlider } from "@/components/ui/mui-slider"

function MuiSliderNonLinear() {
  return (
    <div className="w-full max-w-sm">
      <MuiSlider defaultValue={2000} min={0} max={10000} step={100} ariaLabel="Doğrusal olmayan" />
      <p className="mt-2 text-xs text-gray-500">Basit adımlı (0-10000, 100 birim) örnek.</p>
    </div>
  )
}

export { MuiSliderNonLinear }
