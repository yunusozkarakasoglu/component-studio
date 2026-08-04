/**
 * CheckboxInvalid
 * HeroUI Invalid örneği (saf React).
 * @id 205
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxInvalid() {
  return (
    <Checkbox isInvalid isRequired label="I agree to the terms" description="You must accept the terms to continue" />
  )
}

export { CheckboxInvalid }
