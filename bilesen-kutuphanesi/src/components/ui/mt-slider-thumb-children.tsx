/**
 * MtSliderThumbChildren
 * Tutamak içeriği (saf React, Mantine kaynaklı).
 * @id 1270
 * @category Seçim
 * @subcategory MtSlider
 * @source mantine
 */
import { MtSlider } from "@/components/ui/mt-slider"

function MtSliderThumbChildren() {
  return (
    <MtSlider
      defaultValue={40}
      thumbSize={26}
      className="max-w-sm"
      thumbChildren={
        <span className="flex size-full items-center justify-center text-[10px] font-bold text-white">40</span>
      }
    />
  )
}

export { MtSliderThumbChildren }
