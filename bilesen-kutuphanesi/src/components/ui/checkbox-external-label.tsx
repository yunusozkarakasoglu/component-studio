/**
 * CheckboxExternalLabel
 * HeroUI External Label örneği — dış etiket (saf React).
 * @id 202
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function CheckboxExternalLabel() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox aria-label="Send me marketing emails" />
      <Label>Send me marketing emails</Label>
    </div>
  )
}

export { CheckboxExternalLabel }
