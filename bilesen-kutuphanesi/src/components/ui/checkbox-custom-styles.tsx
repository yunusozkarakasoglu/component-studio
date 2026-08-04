/**
 * CheckboxCustomStyles
 * Tailwind CSS örneği — özel renk (saf React).
 * @id 211
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxCustomStyles() {
  return (
    <Checkbox
      className="[&_[data-slot=checkbox-control]]:border-emerald-400 [&_[data-slot=checkbox-control][data-selected]]:border-emerald-500 [&_[data-slot=checkbox-control][data-selected]]:bg-emerald-500"
      label="Custom styled checkbox"
    />
  )
}

export { CheckboxCustomStyles }
