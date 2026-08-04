/**
 * CheckboxWithDescription
 * With Description örneği (saf React).
 * @id 203
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxWithDescription() {
  return (
    <Checkbox label="Email notifications" description="Get notified when someone mentions you in a comment" />
  )
}

export { CheckboxWithDescription }
