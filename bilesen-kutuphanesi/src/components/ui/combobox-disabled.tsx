/**
 * ComboboxDisabled
 * Devre dışı örnek (saf React).
 * @id 251
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
]

function ComboboxDisabled() {
  return (
    <Combobox isDisabled defaultSelectedKey="cat" className="w-[256px]" items={animals} label="Favorite Animal" placeholder="Search animals..." />
  )
}

export { ComboboxDisabled }
