/**
 * CheckboxGroupCustomIndicator
 * With Custom Indicator örneği — X işareti (saf React).
 * @id 219
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import { X } from "@/components/ui/icons"

function CheckboxGroupCustomIndicator() {
  return (
    <CheckboxGroup name="features" label="Features" description="Select the features you want">
      <Checkbox value="notifications" label="Email notifications" description="Receive updates via email" indicator={<X className="size-3" />} />
      <Checkbox value="newsletter" label="Newsletter" description="Get weekly newsletters" indicator={<X className="size-3" />} />
    </CheckboxGroup>
  )
}

export { CheckboxGroupCustomIndicator }
