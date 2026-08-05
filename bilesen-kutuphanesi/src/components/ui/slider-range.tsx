/**
 * SliderRange
 * Fiyat aralığı örneği — iki thumb + para biçimi (saf React).
 * @id 385
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderRange() {
  return (
    <Slider
      className="w-full max-w-xs"
      defaultValue={[100, 500]}
      formatOptions={{ currency: "USD", style: "currency" }}
      maxValue={1000}
      minValue={0}
      step={50}
    >
      <Label>Price Range</Label>
      <SliderOutput />
      <SliderTrack>
        {({ state }) => (
          <>
            <SliderFill />
            {state.values.map((_, i) => (
              <SliderThumb key={i} index={i} />
            ))}
          </>
        )}
      </SliderTrack>
    </Slider>
  )
}

export { SliderRange }
