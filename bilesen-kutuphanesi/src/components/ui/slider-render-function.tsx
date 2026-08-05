/**
 * SliderRenderFunction
 * render prop örneği — kök DOM override (saf React).
 * @id 386
 * @category Form Elemanları
 * @subcategory Slider
 */
import { Label } from "@/components/ui/label"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/ui/slider"

function SliderRenderFunction() {
  return (
    <Slider
      className="w-full max-w-xs"
      defaultValue={30}
      render={(props) => <div {...props} data-custom="foo" />}
    >
      <Label>Volume</Label>
      <SliderOutput />
      <SliderTrack>
        <SliderFill />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}

export { SliderRenderFunction }
