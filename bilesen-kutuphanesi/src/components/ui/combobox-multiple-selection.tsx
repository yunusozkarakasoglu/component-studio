/**
 * ComboboxMultipleSelection
 * Çoklu seçim örneği — seçilenler tag olarak gösterilir (saf React).
 * @id 259
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxMultipleSelection() {
  return <Combobox className="w-[256px]" selectionMode="multiple" items={animals} label="Favorite Animals" placeholder="Search animals..." />
}

export { ComboboxMultipleSelection }
