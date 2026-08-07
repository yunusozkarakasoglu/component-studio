/**
 * MtInputSections
 * Bölümler — ikonlar (saf React, Mantine kaynaklı).
 * @id 1196
 * @category Form Elemanları
 * @subcategory MtInput
 * @source mantine
 */
import { AtSign, Check, Search } from "@/components/ui/icons"
import { MtInput, MtInputWrapper } from "@/components/ui/mt-input"

function MtInputSections() {
  return (
    <div className="flex max-w-sm flex-col gap-4">
      <MtInputWrapper label="Left section">
        <MtInput placeholder="Your email" leftSection={<AtSign className="size-4" />} />
      </MtInputWrapper>
      <MtInputWrapper label="Right section">
        <MtInput placeholder="Search" rightSection={<Search className="size-4" />} />
      </MtInputWrapper>
      <MtInputWrapper label="Both sections">
        <MtInput placeholder="With check" leftSection={<Check className="size-4 text-emerald-500" />} />
      </MtInputWrapper>
    </div>
  )
}

export { MtInputSections }
