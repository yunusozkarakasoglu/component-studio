/**
 * CheckboxCustomIndicator
 * HeroUI Custom Indicator örneği — kalp/artı/çizgi işaretleri (saf React).
 * @id 210
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Minus, Plus } from "@/components/ui/icons"

function CheckboxCustomIndicator() {
  return (
    <div className="flex gap-4">
      <Checkbox defaultSelected label="Heart" indicator={<Heart className="size-3" />} />
      <Checkbox defaultSelected label="Plus" indicator={<Plus className="size-3.5" />} />
      <Checkbox isIndeterminate label="Indeterminate" indicator={<Minus className="size-3.5" />} />
    </div>
  )
}

export { CheckboxCustomIndicator }
