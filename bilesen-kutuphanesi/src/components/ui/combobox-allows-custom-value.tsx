/**
 * ComboboxAllowsCustomValue
 * Özel değer örneği — listede olmayan değer yazılabilir (saf React).
 * @id 257
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxAllowsCustomValue() {
  return (
    <Combobox
      allowsCustomValue
      className="w-[256px]"
      items={animals}
      label="Favorite Animal"
      placeholder="Search or type an animal..."
      description="You can type any animal name, even if it's not in the list"
    />
  )
}

export { ComboboxAllowsCustomValue }
