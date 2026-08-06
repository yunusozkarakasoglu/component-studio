/**
 * ShadcnNativeSelectInvalid
 * Geçersiz durum (saf React, shadcn kaynaklı).
 * @id 690
 * @category Form Elemanları
 * @subcategory ShadcnNativeSelect
 * @source shadcn
 */
import { ShadcnNativeSelect, ShadcnNativeSelectOption } from "@/components/ui/shadcn-native-select"

function ShadcnNativeSelectInvalid() {
  return (
    <ShadcnNativeSelect className="w-[220px]" aria-invalid="true">
      <ShadcnNativeSelectOption value="">Error state</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="apple">Apple</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="banana">Banana</ShadcnNativeSelectOption>
      <ShadcnNativeSelectOption value="blueberry">Blueberry</ShadcnNativeSelectOption>
    </ShadcnNativeSelect>
  )
}

export { ShadcnNativeSelectInvalid }
