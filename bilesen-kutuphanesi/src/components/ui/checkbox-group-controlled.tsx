/**
 * CheckboxGroupControlled
 * HeroUI Controlled örneği (saf React).
 * @id 216
 * @category Checkbox
 */
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"

function CheckboxGroupControlled() {
  const [selected, setSelected] = useState(["coding", "design"])
  return (
    <CheckboxGroup className="min-w-[320px]" name="skills" value={selected} onChange={setSelected} label="Your skills">
      <Checkbox value="coding" label="Coding" />
      <Checkbox value="design" label="Design" />
      <Checkbox value="writing" label="Writing" />
      <p className="mt-2 text-sm text-muted-foreground">Selected: {selected.join(", ") || "None"}</p>
    </CheckboxGroup>
  )
}

export { CheckboxGroupControlled }
