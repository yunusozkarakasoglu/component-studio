/**
 * ComboboxWithDisabledOptions
 * Seçilemez seçenekler örneği (saf React).
 * @id 252
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "dog", name: "Dog" }, { id: "cat", name: "Cat" }, { id: "bird", name: "Bird" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "elephant", name: "Elephant" }, { id: "tiger", name: "Tiger" },
]

function ComboboxWithDisabledOptions() {
  return <Combobox className="w-[256px]" disabledKeys={["cat", "kangaroo"]} items={animals} label="Animal" placeholder="Search animals..." />
}

export { ComboboxWithDisabledOptions }
