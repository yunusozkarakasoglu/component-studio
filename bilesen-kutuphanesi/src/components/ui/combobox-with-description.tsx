/**
 * ComboboxWithDescription
 * Açıklamalı örnek (saf React).
 * @id 249
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxWithDescription() {
  return (
    <Combobox
      className="w-[256px]"
      items={animals}
      label="Favorite Animal"
      placeholder="Search animals..."
      description="Search and select your favorite animal"
    />
  )
}

export { ComboboxWithDescription }
