/**
 * ComboboxDefault
 * Kullanım örneği — temel combo box (saf React).
 * @id 247
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxDefault() {
  return <Combobox className="w-[256px]" items={animals} label="Favorite Animal" placeholder="Search animals..." />
}

export { ComboboxDefault }
