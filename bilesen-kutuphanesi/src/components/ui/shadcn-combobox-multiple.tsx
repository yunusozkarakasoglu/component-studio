/**
 * ShadcnComboboxMultiple
 * Çoklu seçim (saf React, shadcn kaynaklı).
 * @id 901
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro", "Vite"]

function ShadcnComboboxMultiple() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={frameworks} value={value} onChange={(v) => setValue(v as string[])} multiple placeholder="Select frameworks" />
      <p className="text-sm text-muted-foreground">
        {value.length > 0 ? `Selected: ${value.join(", ")}` : "Choose one or more frameworks"}
      </p>
    </div>
  )
}

export { ShadcnComboboxMultiple }
