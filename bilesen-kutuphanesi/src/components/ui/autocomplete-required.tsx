/**
 * AutocompleteRequired
 * HeroUI Required örneği — zorunlu alan + gönderim simülasyonu (saf React).
 * @id 146
 * @category Form Elemanları
 */
import { useState, type FormEvent } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
]

function AutocompleteRequired() {
  const [state, setState] = useState<string | null>(null)
  const [msg, setMsg] = useState("")
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMsg(state ? `Form submitted: ${states.find((s) => s.id === state)?.name}` : "Lütfen bir eyalet seçin")
  }
  return (
    <form className="flex w-[256px] flex-col gap-4" onSubmit={onSubmit}>
      <div>
        <Label className="mb-1.5">State <span className="text-red-500">*</span></Label>
        <Autocomplete items={states} placeholder="Select one" selectionMode="single" value={state} onChange={(v) => setState(v as string | null)} />
      </div>
      <Button type="submit">Submit</Button>
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
    </form>
  )
}

export { AutocompleteRequired }
