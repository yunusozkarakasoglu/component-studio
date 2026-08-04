/**
 * CheckboxRenderProps
 * Render Props örneği — duruma göre değişen etiket (saf React).
 * @id 209
 * @category Checkbox
 */
import { Checkbox } from "@/components/ui/checkbox"

function CheckboxRenderProps() {
  return (
    <Checkbox
      label={(s) => (s.isSelected ? "Terms accepted" : "Accept terms")}
      description={(s) => (s.isSelected ? "Thank you for accepting" : "Please read and accept the terms")}
    />
  )
}

export { CheckboxRenderProps }
