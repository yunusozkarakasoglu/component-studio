/**
 * MtSelectNothingFound
 * Sonuç yok durumu (saf React, Mantine kaynaklı).
 * @id 1314
 * @category Combobox
 * @subcategory MtSelect
 * @source mantine
 */
import { MtSelect } from "@/components/ui/mt-select"

function MtSelectNothingFound() {
  return (
    <MtSelect
      searchable
      data={["Apple", "Banana", "Orange"]}
      label="Search fruits"
      nothingFound="No fruits found"
      className="max-w-sm"
    />
  )
}

export { MtSelectNothingFound }
