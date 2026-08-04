/**
 * CheckboxGroupDisabled
 * HeroUI Disabled örneği (saf React).
 * @id 214
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

function CheckboxGroupDisabled() {
  return (
    <CheckboxGroup isDisabled name="disabled-features" label="Features" description="Feature selection is temporarily disabled">
      <Checkbox value="feature1" label="Feature 1" description="This feature is coming soon" />
      <Checkbox value="feature2" label="Feature 2" description="This feature is coming soon" />
    </CheckboxGroup>
  )
}

export { CheckboxGroupDisabled }
