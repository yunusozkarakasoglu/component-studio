/**
 * ShadcnComboboxDemo
 * Otomatik tamamlamalı seçim (saf React, shadcn kaynaklı).
 * @id 900
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

const languages = ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Java", "C#", "Ruby", "PHP", "Swift"]

function ShadcnComboboxDemo() {
  const [value, setValue] = useState<string>("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={languages} value={value} onChange={setValue} placeholder="Search a language…" />
      <p className="text-sm text-muted-foreground">{value ? `You selected: ${value}` : "Type to search languages"}</p>
    </div>
  )
}

export { ShadcnComboboxDemo }
