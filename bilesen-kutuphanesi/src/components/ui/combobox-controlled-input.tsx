/**
 * ComboboxControlledInput
 * Kontrollü input değeri örneği (saf React).
 * @id 254
 * @category Combobox
 */
import { useState } from "react"
import { Combobox } from "@/components/ui/combobox"

const animals = [
  { id: "aardvark", name: "Aardvark" }, { id: "cat", name: "Cat" }, { id: "dog", name: "Dog" },
  { id: "kangaroo", name: "Kangaroo" }, { id: "panda", name: "Panda" }, { id: "snake", name: "Snake" },
]

function ComboboxControlledInput() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="w-[256px] space-y-2">
      <Combobox items={animals} label="Search (controlled input)" inputValue={inputValue} onInputChange={setInputValue} placeholder="Type to search..." />
      <p className="text-sm text-muted-foreground">Input value: {inputValue || "(empty)"}</p>
    </div>
  )
}

export { ComboboxControlledInput }
