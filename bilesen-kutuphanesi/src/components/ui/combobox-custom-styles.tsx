/**
 * ComboboxCustomStyles
 * Özelleştirilmiş görünüm örneği (saf React).
 * @id 261
 * @category Combobox
 */
import { Combobox } from "@/components/ui/combobox"

const frameworks = [
  { id: "react", name: "React" }, { id: "vue", name: "Vue" }, { id: "svelte", name: "Svelte" },
]

function ComboboxCustomStyles() {
  return <Combobox className="w-64" items={frameworks} label="Framework" placeholder="Search..." />
}

export { ComboboxCustomStyles }
