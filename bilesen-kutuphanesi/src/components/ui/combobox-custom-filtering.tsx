/**
 * ComboboxCustomFiltering
 * Özel filtre örneği (saf React).
 * @id 258
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" }, { id: "bird", name: "Bird" },
  { id: "fish", name: "Fish" }, { id: "hamster", name: "Hamster" },
]

function ComboboxCustomFiltering() {
  return (
    <Combobox
      className="w-[256px]"
      items={animals}
      label="Animal (custom filter)"
      defaultFilter={(text, inputValue) => {
        if (!inputValue) return true
        return text.toLowerCase().includes(inputValue.toLowerCase())
      }}
    />
  )
}

export { ComboboxCustomFiltering }
