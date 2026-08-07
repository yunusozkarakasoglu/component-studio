/**
 * ShadcnComboboxWithGroups
 * Bölümlü seçenekler — ayraçlı (saf React, shadcn kaynaklı).
 * Not: kaynakta ComboboxList render prop ile gruplama yapılır; burada
 * basit başlıklı gruplar düz liste olarak gösterilir.
 * @id 903
 * @category Combobox
 * @subcategory ShadcnCombobox
 * @source shadcn
 */
import { useState } from "react"
import { ShadcnCombobox } from "@/components/ui/shadcn-combobox"

const grouped = ["— Frameworks —", "Next.js", "SvelteKit", "Nuxt.js", "— Tools —", "Vite", "Turbo", "Turbopack"]

function ShadcnComboboxWithGroups() {
  const [value, setValue] = useState<string>("")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ShadcnCombobox items={grouped} value={value} onChange={(v) => setValue(v as string)} placeholder="Select an item" />
      <p className="text-sm text-muted-foreground">{value ? `Selected: ${value}` : "Groups shown with — separators"}</p>
    </div>
  )
}

export { ShadcnComboboxWithGroups }
