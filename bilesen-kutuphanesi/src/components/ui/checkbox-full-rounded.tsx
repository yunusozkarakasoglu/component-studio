/**
 * CheckboxFullRounded
 * Full Rounded örneği — boyutlar (saf React, className ile).
 * @id 200
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxFullRounded() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox className="[&_[data-slot=checkbox-control]]:size-3 [&_[data-slot=checkbox-control]]:rounded-full" label="Small size" />
      <Checkbox className="[&_[data-slot=checkbox-control]]:rounded-full" label="Default size" />
      <Checkbox className="[&_[data-slot=checkbox-control]]:size-5 [&_[data-slot=checkbox-control]]:rounded-full" label="Large size" />
      <Checkbox className="[&_[data-slot=checkbox-control]]:size-6 [&_[data-slot=checkbox-control]]:rounded-full" label="Extra large size" />
    </div>
  )
}

export { CheckboxFullRounded }
