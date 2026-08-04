/**
 * CheckboxGroupOnSurface
 * HeroUI In Surface örneği (saf React).
 * @id 213
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

function CheckboxGroupOnSurface() {
  return (
    <div className="w-full rounded-3xl bg-muted/20 p-6">
      <CheckboxGroup name="interests" label="Select your interests" description="Choose all that apply">
        <Checkbox value="coding" label="Coding" description="Love building software" />
        <Checkbox value="design" label="Design" description="Enjoy creating beautiful interfaces" />
        <Checkbox value="writing" label="Writing" description="Passionate about content creation" />
      </CheckboxGroup>
    </div>
  )
}

export { CheckboxGroupOnSurface }
