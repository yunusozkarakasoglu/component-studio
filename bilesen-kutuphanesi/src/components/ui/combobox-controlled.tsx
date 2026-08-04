/**
 * ComboboxControlled
 * Kontrollü seçim örneği (saf React).
 * @id 253
 * @category Combobox
 */
import { useState } from "react"
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" }, { id: "bird", name: "Bird" },
  { id: "fish", name: "Fish" }, { id: "hamster", name: "Hamster" },
]

function ComboboxControlled() {
  const [selectedKey, setSelectedKey] = useState<string | null>("cat")
  const selected = animals.find((a) => a.id === selectedKey)
  return (
    <div className="w-[256px] space-y-2">
      <Combobox items={animals} label="Animal (controlled)" selectedKey={selectedKey} onSelectionChange={(k) => setSelectedKey(k as string | null)} />
      <p className="text-sm text-muted-foreground">Selected: {selected?.name || "None"}</p>
    </div>
  )
}

export { ComboboxControlled }
