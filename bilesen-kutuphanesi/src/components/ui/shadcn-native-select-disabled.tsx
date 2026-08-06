/**
 * ShadcnNativeSelectDisabled
 * Devre dışı select (saf React, shadcn kaynaklı).
 * @id 689
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import { ShadcnNativeSelect, ShadcnNativeSelectOption } from "@/components/ui/shadcn-native-select"

function ShadcnNativeSelectDisabled() {
  return (
    <ShadcnNativeSelect className="w-[220px]" disabled>
      <ShadcnNativeSelectOption value="">Disabled</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="apple">Apple</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="banana">Banana</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="blueberry">Blueberry</ShadcnNativeSelectOption>
    </ShadcnNativeSelect>
  )
}

export { ShadcnNativeSelectDisabled }
