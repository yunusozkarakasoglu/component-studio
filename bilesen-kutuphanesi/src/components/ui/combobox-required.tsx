/**
 * ComboboxRequired
 * Zorunlu alan örneği (saf React).
 * @id 250
 * @category Combobox
 */
import { useState, type FormEvent } from "react"
import { Combobox } from "@/components/ui/combobox"
import { Button } from "@/components/ui/button"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
]

function ComboboxRequired() {
  const [msg, setMsg] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setMsg("Gönderildi: " + (data.get("animal")?.toString() || "(boş)"))
  }
  return (
    <form className="flex w-[256px] flex-col gap-4" onSubmit={onSubmit}>
      <Combobox isRequired name="animal" items={animals} label="Favorite Animal" placeholder="Search animals..." />
      <Button type="submit" className="w-fit">Submit</Button>
      {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
    </form>
  )
}

export { ComboboxRequired }
