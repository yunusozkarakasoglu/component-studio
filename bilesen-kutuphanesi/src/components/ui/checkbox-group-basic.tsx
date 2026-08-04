/**
 * CheckboxGroupBasic
 * Usage örneği (saf React).
 * @id 212
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

function CheckboxGroupBasic() {
  return (
    <CheckboxGroup name="interests" label="Select your interests" description="Choose all that apply">
      <Checkbox value="coding" label="Coding" description="Love building software" />
      <Checkbox value="design" label="Design" description="Enjoy creating beautiful interfaces" />
      <Checkbox value="writing" label="Writing" description="Passionate about content creation" />
    </CheckboxGroup>
  )
}

export { CheckboxGroupBasic }
