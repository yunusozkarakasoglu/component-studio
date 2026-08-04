/**
 * AutocompleteVariants
 * Variants örneği — primary/secondary × single/multiple (saf React).
 * @id 143
 * @category Form Elemanları
 */
import { useState } from "react"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

const items = [
  { id: "option1", name: "Option 1" }, { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" }, { id: "option4", name: "Option 4" },
]

function AutocompleteVariants() {
  const [s1, setS1] = useState<string | null>(null)
  const [s2, setS2] = useState<string | null>(null)
  const [m1, setM1] = useState<string[]>([])
  const [m2, setM2] = useState<string[]>([])
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Single Select</h3>
        <div className="flex flex-col gap-4">
          <div className="w-[256px]">
            <Label className="mb-1.5">Primary variant</Label>
            <Autocomplete items={items} placeholder="Select one" selectionMode="single" value={s1} onChange={(v) => setS1(v as string | null)} />
          </div>
          <div className="w-[256px]">
            <Label className="mb-1.5">Secondary variant</Label>
            <Autocomplete items={items} placeholder="Select one" selectionMode="single" variant="secondary" value={s2} onChange={(v) => setS2(v as string | null)} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">Multiple Select</h3>
        <div className="flex flex-col gap-4">
          <div className="w-[256px]">
            <Label className="mb-1.5">Primary variant</Label>
            <Autocomplete items={items} placeholder="Select multiple" selectionMode="multiple" value={m1} onChange={(v) => setM1((v ?? []) as string[])} />
          </div>
          <div className="w-[256px]">
            <Label className="mb-1.5">Secondary variant</Label>
            <Autocomplete items={items} placeholder="Select multiple" selectionMode="multiple" variant="secondary" value={m2} onChange={(v) => setM2((v ?? []) as string[])} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { AutocompleteVariants }
