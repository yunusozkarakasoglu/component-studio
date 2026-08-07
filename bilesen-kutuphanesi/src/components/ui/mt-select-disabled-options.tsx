/**
 * MtSelectDisabledOptions
 * Devre dışı seçenekler (saf React, Mantine kaynaklı).
 * @id 1311
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectDisabledOptions() {
  return (
    <MtSelect
      data={[
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular", disabled: true },
        { value: "svelte", label: "Svelte" },
      ]}
      label="With disabled options"
      className="max-w-sm"
    />
  )
}

export { MtSelectDisabledOptions }
