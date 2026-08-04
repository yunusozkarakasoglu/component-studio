/**
 * ComboboxDefaultSelectedKey
 * Varsayılan seçim örneği (saf React).
 * @id 256
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxDefaultSelectedKey() {
  return <Combobox className="w-[256px]" defaultSelectedKey="cat" items={animals} label="Favorite Animal" placeholder="Search animals..." />
}

export { ComboboxDefaultSelectedKey }
