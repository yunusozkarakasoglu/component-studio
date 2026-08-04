/**
 * ComboboxOnSurface
 * Surface üzerinde örnek (saf React).
 * @id 260
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxOnSurface() {
  return (
    <div className="w-[320px] rounded-3xl bg-muted/20 p-6">
      <Combobox fullWidth items={animals} label="Favorite Animal" placeholder="Search animals..." />
    </div>
  )
}

export { ComboboxOnSurface }
