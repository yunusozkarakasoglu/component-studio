/**
 * ShadcnComboboxBasic
 * Temel örnek — framework seçimi (saf React, shadcn kaynaklı).
 * @id 899
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

function ShadcnComboboxBasic() {
  const [value, setValue] = useState<string>("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={frameworks} value={value} onChange={(v) => setValue(v as string)} placeholder="Select a framework" />
      <p className="text-sm text-muted-foreground">{value ? `Selected: ${value}` : "No framework selected"}</p>
    </div>
  )
}

export { ShadcnComboboxBasic }
