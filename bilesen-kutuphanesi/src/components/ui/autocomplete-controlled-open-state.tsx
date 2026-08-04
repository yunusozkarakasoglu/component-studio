/**
 * AutocompleteControlledOpenState
 * Controlled Open State örneği (saf React).
 * @id 153
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Button } from "@/components/ui/button"

const states = [
  { id: "florida", name: "Florida" }, { id: "delaware", name: "Delaware" },
  { id: "california", name: "California" }, { id: "texas", name: "Texas" },
]

function AutocompleteControlledOpenState() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-[256px] space-y-4">
      <Autocomplete isOpen={isOpen} onOpenChange={setIsOpen} items={states} placeholder="Select one" selectionMode="single" />
      <Button variant="secondary" onPress={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"} Autocomplete</Button>
      <p className="text-sm text-muted-foreground">Autocomplete is {isOpen ? "open" : "closed"}</p>
    </div>
  )
}

export { AutocompleteControlledOpenState }
