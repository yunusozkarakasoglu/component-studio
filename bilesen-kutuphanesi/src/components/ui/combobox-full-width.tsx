/**
 * ComboboxFullWidth
 * Tam genişlik örneği (saf React).
 * @id 248
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
]

function ComboboxFullWidth() {
  return (
    <div className="w-[400px]">
      <Combobox fullWidth items={animals} label="Favorite Animal" placeholder="Search animals..." />
    </div>
  )
}

export { ComboboxFullWidth }
