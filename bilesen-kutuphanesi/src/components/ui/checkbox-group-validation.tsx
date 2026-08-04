/**
 * CheckboxGroupValidation
 * Validation örneği — zorunlu alan (saf React).
 * @id 217
 * @category Checkbox
 */
import { useState, type FormEvent } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxGroup } from "@/components/ui/checkbox-group"
import { Button } from "@/components/ui/button"

function CheckboxGroupValidation() {
  const [selected, setSelected] = useState<string[]>([])
  const [error, setError] = useState("")
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!selected.length) { setError("Lütfen en az bir bildirim yöntemi seçin."); return }
    setError("")
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <CheckboxGroup isRequired name="preferences" value={selected} onChange={setSelected} label="Preferences">
        <Checkbox value="email" label="Email notifications" />
        <Checkbox value="sms" label="SMS notifications" />
        <Checkbox value="push" label="Push notifications" />
      </CheckboxGroup>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" className="w-fit">Submit</Button>
    </form>
  )
}

export { CheckboxGroupValidation }
